import { Buildux } from "reprovider";
import { UsersState } from "../../interfaces/users-state.interface";
import { ActionReducerMapBuilder, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../interfaces/user.interface";
import { services } from "./users.registry";
import { userThunksRegistry } from "./users-thunks.registry";
/**
 * Buildux creates a new Slice and then returns a context.
 * The context contains the reducer, actions and services
 * that we can consume if is necessary.
 * For create the state only we need pass the reference like this:
 * new Buildux<MyCurrentState>({})
 */
const { context, thunksRegistry } = new Buildux<UsersState>({
  name: "users",
  services,
  initialState: {
    users: [],
  },
}).createReducers({
  reducers: {
    setUsers: (state, payload: PayloadAction<User[]>) => {
      state.users = payload.payload;
    },
  },
  extraReducers(builder: ActionReducerMapBuilder<UsersState>) {
    builder.addCase(
      context.thunks[0].fulfilled,
      (state, { payload }: PayloadAction<User[]>) => {
        if (payload) state.users = payload;
        console.log(state.users);
      }
    );
  },
});

thunksRegistry(context, userThunksRegistry);

export const fetchUsers = context.thunks[0];

export const { setUsers } = context.actions;
export const usersReducer = context.reducer;

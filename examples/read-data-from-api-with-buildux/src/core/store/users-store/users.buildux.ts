import { Buildux } from "../../../../../../src/index";
import { UsersState } from "../../interfaces/users-state.interface";
import { services } from "./users-services.registry";
import { userThunksRegistry } from "./users-thunks.registry";
import { UsersThunks } from "../../interfaces/users-thunks.interface";
import { usersReducers } from "./users-reducers.registry";
/**
 * Buildux creates a new Slice and then returns a context.
 * The context contains the reducer, actions and services
 * that we can consume if is necessary.
 * For create the state only we need pass the reference like this:
 * new Buildux<MyCurrentState>({})
 */
const { context, thunksRegistry, createReducers } = new Buildux<
  UsersState,
  UsersThunks
>({
  name: "users",
  
  services,
  initialState: {
    users: [],
  },
});

//For better organization, you can separate the reducers registry from the main file, making it easier to read and maintain.
createReducers(usersReducers);

thunksRegistry(context, userThunksRegistry);

// ThunksExports
export const { fetchUsers } = context.thunks;

// Actions exports
export const { setUsers } = context.actions;

// Reducer exports
export const usersReducer = context.reducer;

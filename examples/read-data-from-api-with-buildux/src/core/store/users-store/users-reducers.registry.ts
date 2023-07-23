import { PayloadAction, ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { User } from "../../interfaces/user.interface";
import { UsersState } from "../../interfaces/users-state.interface";
import { fetchUsers } from "./users.buildux";

export const usersReducers = {
  reducers: {},
  extraReducers(builder: ActionReducerMapBuilder<UsersState>) {
    builder.addCase(
      fetchUsers.fulfilled,
      (state, { payload }: PayloadAction<User[]>) => {
        if (payload) state.users = payload;
        console.log(state.users);
      }
    );
  },
};

import { BuilduxThunkOptions } from "../interfaces/buildux-thunk.options";
import { AsyncThunk, createAsyncThunk } from "@reduxjs/toolkit";

export const builduxThunk = <T>({
  action,
  context,
  reference,
}: BuilduxThunkOptions<T>): AsyncThunk<any, any, {}> => {
  return createAsyncThunk(reference, async (arg) => {
    const result = await action(arg, context);
    return result;
  });
};

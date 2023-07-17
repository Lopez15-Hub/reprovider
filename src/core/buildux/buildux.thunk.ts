import {
  AsyncThunk,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import { BuilduxThunkOptions } from "../interfaces/buildux-thunk.options";

/**

Returns an AsyncThunk using the specific action and reference 
@template T - The type of the thunk action payload.
@template U - The type of the thunk action argument.
@param {BuilduxThunkOptions<T, U>} options - The options for creating the async thunk.
@param {() => Promise<T>} options.action - The async function that represents the action to be performed.
@param {string} options.reference - The reference string for the async thunk.
@returns {AsyncThunkAction<T, U, AsyncThunkOptions>} The created async thunk action.
*/
export const builduxThunk = <T, U>({
  action,
  reference,
}: BuilduxThunkOptions): AsyncThunk<T, U, any> =>
  createAsyncThunk<T, U>(reference, action);

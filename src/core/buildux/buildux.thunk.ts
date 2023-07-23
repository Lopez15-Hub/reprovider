import { AsyncThunk, createAsyncThunk } from "@reduxjs/toolkit";
import { BuilduxThunkOptions } from "../interfaces/buildux-thunk.options";

/**

Returns an AsyncThunk using the specific action and reference 
@template Returned - The type of the thunk action payload.
@template ThunkArg - The type of the thunk action argument.
@param {BuilduxThunkOptions<Returned, ThunkArg>} options - The options for creating the async thunk.
@param {() => Promise<Returned>} options.action - The async function that represents the action to be performed.
@param {string} options.reference - The reference string for the async thunk.
@returns {AsyncThunkAction<Returned, ThunkArg, any>} The created async thunk action.
*/
export const builduxThunk = <Returned, ThunkArg = void>({
  action,
  reference,
}: BuilduxThunkOptions<Returned>): AsyncThunk<Returned, ThunkArg, any> =>
  createAsyncThunk<Returned, ThunkArg, any>(reference, action);

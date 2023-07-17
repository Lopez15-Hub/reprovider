import {
  CaseReducerActions,
  Reducer,
  SliceCaseReducers,
} from "@reduxjs/toolkit";
import { Consumer } from "../reprovider";
import { ThunkAction } from "./thunk-action.interface";

export interface BuilduxContext<T> {
  consumer: Consumer;
  reducer: Reducer<T>;
  actions: CaseReducerActions<SliceCaseReducers<T>, string>;
  thunks: ThunkAction[];
}

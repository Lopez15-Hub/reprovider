import {
  AsyncThunk,
  CaseReducerActions,
  Reducer,
  SliceCaseReducers,
} from "@reduxjs/toolkit";
import { Consumer } from "../reprovider";

export interface BuilduxContext<T> {
  consumer: Consumer | null;
  reducer: Reducer<T>;
  actions: CaseReducerActions<SliceCaseReducers<T>, string>;
  thunks: AsyncThunk<any, any, any>[] ;
}

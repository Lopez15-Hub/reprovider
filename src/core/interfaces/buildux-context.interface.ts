import {
  CaseReducerActions,
  Reducer,
  SliceCaseReducers,
} from "@reduxjs/toolkit";
import { Consumer } from "../reprovider";

export interface BuilduxContext<State, ThunksState = any> {
  consumer: Consumer;
  reducer: Reducer<State>;
  actions: CaseReducerActions<SliceCaseReducers<State>, string>;
  thunks: ThunksState;
}

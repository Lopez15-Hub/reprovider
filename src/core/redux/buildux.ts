import {
  SliceCaseReducers,
  ValidateSliceCaseReducers,
  createSlice,
} from "@reduxjs/toolkit";
import { SliceCreator } from "../interfaces/slice-creator.interface";
import { Consumer, Service } from "../reprovider";
import { BuilduxContext } from "./buildux.context";

export class Buildux<T> {
  context: BuilduxContext<T>;

  constructor(private readonly creator: SliceCreator<T>) {
    this.context = {
      consumer: creator.services ? new Consumer(creator.services ?? []) : null,
      reducer: (state: any) => state,
      actions: {},
    };
  }

  registry = (services: Service[]) => {
    this.context.consumer = new Consumer(services);
  };

  createReducers = (
    reducers: ValidateSliceCaseReducers<T, SliceCaseReducers<T>>
  ) => {
    const { actions, reducer } = createSlice({
      name: this.creator.name,
      initialState: this.creator.initialState,
      reducers: reducers,
    });

    this.context.actions = actions;
    this.context.reducer = reducer;

    return this;
  };
}

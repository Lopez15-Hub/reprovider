import { AsyncThunk, createSlice } from "@reduxjs/toolkit";
import { SliceCreator } from "../interfaces/slice-creator.interface";
import {
  BaseQueryFn,
  CreateApiOptions,
  EndpointDefinitions,
  createApi,
} from "@reduxjs/toolkit/query/react";

import { Consumer, Service } from "../reprovider";
import { BuilduxContext } from "./buildux.context";
import { CreateReducerOptions } from "../interfaces/create-reducer-options.interface";

export class Buildux<T> {
  context: BuilduxContext<T>;

  constructor(private readonly creator: SliceCreator<T>) {
    this.context = {
      consumer: creator.services ? new Consumer(creator.services ?? []) : null,
      thunks: [],
      reducer: (state: any) => state,
      actions: {},
    };
  }

  registry = (services: Service[]) => {
    this.context.consumer = new Consumer(services);
  };
  thunksRegistry = (
    thunks: (context: BuilduxContext<T>) => AsyncThunk<any, any, any>[]
  ) => {
    this.context.thunks = thunks(this.context);
    return this;
  };
  static createApi = (
    options: CreateApiOptions<BaseQueryFn, EndpointDefinitions, string, never>
  ) => {
    return createApi(options);
  };
  createReducers = (options: CreateReducerOptions<T>) => {
    const { actions, reducer } = createSlice({
      name: this.creator.name,
      initialState: this.creator.initialState,
      reducers: options.reducers,
      extraReducers: options.extraReducers,
    });

    this.context.actions = actions;
    this.context.reducer = reducer;

    return this;
  };
}

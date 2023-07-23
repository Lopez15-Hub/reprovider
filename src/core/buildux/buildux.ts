import { createSlice } from "@reduxjs/toolkit";
import { SliceCreator } from "../interfaces/slice-creator.interface";
import {
  BaseQueryFn,
  CreateApiOptions,
  EndpointDefinitions,
  createApi,
} from "@reduxjs/toolkit/query/react";

import { Consumer } from "../reprovider";
import { BuilduxContext } from "../interfaces/buildux-context.interface";
import { CreateReducerOptions } from "../interfaces/create-reducer-options.interface";

/**
 * Simplify the redux integration and add a context that can be readed from reducers and thunks.
 * @class Buildux
 * @author Ezequiel López
 */

export class Buildux<T, ThunksType = any> {
  context: BuilduxContext<T, ThunksType>; //Context of our slice

  /**
   * @param {SliceCreator<T>} creator - Initial config of Buildux. <T> is the state of slice.
   * @param {string} creator.name - Slice name
   * @param {<T>} creator.initialState - Initital state of slice
   * @param {Service[]} creator.services - Services that will be use into reducers or thunks.
   *
   */
  constructor(private readonly creator: SliceCreator<T>) {
    this.context = {
      consumer: new Consumer(creator.services ?? []),
      thunks: {} as ThunksType,
      reducer: (state: any) => state,
      actions: {},
    };
  }
  /**
   * Register thunks and provide the context.
   * @param {BuilduxContext<T>} context - The Buildux Context
   * @param {(context: BuilduxContext<T>) => RegisteredThunk } registerThunksCallback - context provider for thunks
   */
  thunksRegistry = async <T, U>(
    context: BuilduxContext<T>,
    registerThunksCallback: (context: BuilduxContext<T>) => U
  ) => {
    const thunks = registerThunksCallback(context);

    // Asigna los thunks al contexto
    context.thunks = thunks;

    return this;
  };
  /**
   * Allows to create an api for work with RTK Query (Redux toolkit Query)
   * @param {CreateApiOptions<BaseQueryFn, EndpointDefinitions, string, never>} options - The api config you can read more here:  https://redux-toolkit.js.org/rtk-query/overview
   */
  static createApi = (
    options: CreateApiOptions<BaseQueryFn, EndpointDefinitions, string, never>
  ) => {
    return createApi(options);
  };

  /**
   *
   * Register the reducers into redux slice
   * @param {CreateReducerOptions<T>} options - CreateReducer Options
   * @param { ValidateSliceCaseReducers<T, SliceCaseReducers<T>>} options.reducers - The reducers of slice
   * @param {  (builder: ActionReducerMapBuilder<T>) => void} options.extraReducers - Neccesary for use async thunks.
   *
   */
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

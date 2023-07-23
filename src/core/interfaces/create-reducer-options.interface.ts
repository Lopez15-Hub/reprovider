import { SliceCaseReducers, ActionReducerMapBuilder } from "@reduxjs/toolkit";

export interface CreateReducerOptions<T> {
  reducers: SliceCaseReducers<T>;
  extraReducers?: (builder: ActionReducerMapBuilder<T>) => void;
}

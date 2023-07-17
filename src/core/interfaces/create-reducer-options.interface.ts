import {
  ValidateSliceCaseReducers,
  SliceCaseReducers,
  ActionReducerMapBuilder,
} from "@reduxjs/toolkit";

export interface CreateReducerOptions<T> {
  reducers: ValidateSliceCaseReducers<T, SliceCaseReducers<T>>;
  extraReducers?: (builder: ActionReducerMapBuilder<T>) => void;
}

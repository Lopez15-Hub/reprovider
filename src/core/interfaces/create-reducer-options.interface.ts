import {
  ValidateSliceCaseReducers,
  SliceCaseReducers,
  ActionReducerMapBuilder,
} from "@reduxjs/toolkit";
import { NoInfer } from "react-redux";

export interface CreateReducerOptions<T> {
  reducers: ValidateSliceCaseReducers<T, SliceCaseReducers<T>>;
  extraReducers?: (builder: ActionReducerMapBuilder<NoInfer<T>>) => void;
}

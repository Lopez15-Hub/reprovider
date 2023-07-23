import { AsyncThunk } from "@reduxjs/toolkit";
export type ThunkAction<Returned, Argument = void> = AsyncThunk<
  Returned,
  Argument,
  any
>;

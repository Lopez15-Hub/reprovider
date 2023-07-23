import { AsyncThunk } from "@reduxjs/toolkit";

export type RegisteredThunk = {
  [key: string]: AsyncThunk<any, any, any>;
};

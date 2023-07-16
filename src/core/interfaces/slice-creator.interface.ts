import { Service } from "./service.interface";

export interface SliceCreator<T> {
  name: string;
  initialState: T;
  services?: Service[];
}

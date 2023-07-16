import { BuilduxContext } from "../redux/buildux.context";

export interface BuilduxThunkOptions<T> {
  description: string;
  reference: string;
  action: (context: BuilduxContext<T>, arg: any) => Promise<any>;
  context: BuilduxContext<T>;
}

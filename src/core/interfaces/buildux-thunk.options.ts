export interface BuilduxThunkOptions {
  description: string;
  reference: string;
  action: () => Promise<any>;
}

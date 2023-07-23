export interface BuilduxThunkOptions<T, ParamType = any> {
  description: string;
  reference: string;
  action: (params?: ParamType) => Promise<T>; // Agrega el contexto a la firma de la acción
}

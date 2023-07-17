interface HttpAdapter {
  get<T>(
    url: string,
    headers?: { [key: string]: string | string[] } | undefined
  ): Promise<T>;
}

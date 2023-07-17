import axios, { Axios } from "axios";

export class AxiosService implements HttpAdapter {
  private readonly axios: Axios;
  constructor() {
    this.axios = axios;
  }
  async get<T>(
    url: string,
    headers?: { [key: string]: string | string[] } | undefined
  ): Promise<T> {
    const response = await this.axios.get<T>(url, {
      headers,
    });
    return response.data;
  }
}

export class UsersRepository {
  private readonly baseUrl: string;
  constructor(private readonly http: HttpAdapter) {
    this.baseUrl = "https://jsonplaceholder.typicode.com/users";
  }

  async readAll() {
    return await this.http.get(this.baseUrl);
  }
}

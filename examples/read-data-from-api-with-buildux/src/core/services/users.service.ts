import { UsersRepository } from "../repository/users.repository";

export class UsersService {
  constructor(private readonly repository: UsersRepository) {}

  async getUsers(){
    try {
      const users = await this.repository.readAll();
      return users;
    } catch (error: any) {
      console.log(error);
      throw new Error(`An ocurred error trying to get users: ${error.message}`);
    }
  }
}

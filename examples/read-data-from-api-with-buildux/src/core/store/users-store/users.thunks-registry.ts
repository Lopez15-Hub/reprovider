import { BuilduxContext, builduxThunk } from "reprovider";
import { UsersService } from "../../services/users.service";
import { User } from "../../interfaces/user.interface";

export const thunksRegistry = <T>(context: BuilduxContext<T>) => [
  builduxThunk<User[], void>({
    description: "Get user from API",
    reference: "/users",
    action: async () => {
      const usersService = context.consumer.get(UsersService);
      const users = await usersService.getUsers();
      return users;
    },
  }),
];

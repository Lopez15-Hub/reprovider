import { builduxThunk, BuilduxContext } from "reprovider";
import { User } from "../../interfaces/user.interface";
import { UsersService } from "../../services/users.service";

export const userThunksRegistry = <T>(context: BuilduxContext<T>) => [
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

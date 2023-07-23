import { BuilduxContext, builduxThunk } from "reprovider";
import { User } from "../../interfaces/user.interface";
import { UsersService } from "../../services/users.service";

export const userThunksRegistry = <T>(context: BuilduxContext<T>) => ({
  fetchUsers: builduxThunk<User[]>({
    description: "Get user from API",
    reference: "/users",
    action: async () => {
      const usersService = context.consumer.get(UsersService);
      const users = await usersService.getUsers();
      return users;
    },
  }),
});

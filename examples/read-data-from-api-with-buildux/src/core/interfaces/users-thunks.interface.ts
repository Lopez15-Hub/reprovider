import { User } from "./user.interface";
import { ThunkAction } from "reprovider/dist/core/interfaces/thunk-action.interface";

export interface UsersThunks {
  fetchUsers: ThunkAction<User[]>;
}

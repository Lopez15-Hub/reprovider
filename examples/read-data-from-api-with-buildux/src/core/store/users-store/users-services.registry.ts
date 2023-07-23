import { Service } from "reprovider";
import { UsersRepository } from "../../repository/users.repository";
import { AxiosService } from "../../services/axios.service";
import { UsersService } from "../../services/users.service";

export const services: Service[] = [
  {
    description: "Service for read users from JsonPlaceholder",
    service: UsersService,
    dependencies: [new UsersRepository(new AxiosService())],
  },
];

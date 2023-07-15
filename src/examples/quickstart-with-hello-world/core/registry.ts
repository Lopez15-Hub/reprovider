import { Service } from "../../../core/interfaces/service.interface";
import { GreetsService } from "./services/greets.service";
import { GreetsRepository } from "./repository/greets.repository";



export const services: Service[] = [
  {
    description: "Service for greeting people",
    service: GreetsService,
    dependencies: [GreetsRepository],
  },
];

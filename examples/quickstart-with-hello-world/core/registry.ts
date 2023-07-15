
import { GreetsService } from "./services/greets.service";
import { GreetsRepository } from "./repository/greets.repository";
import { Service } from "../../../src/core/reprovider";



export const services: Service[] = [
  {
    description: "Service for greeting people",
    service: GreetsService,
    dependencies: [GreetsRepository],
  },
];

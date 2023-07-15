import { GreetsRepository } from "../repository/greets.repository";

export class GreetsService {
  constructor(private readonly repository: GreetsRepository) {}
  sayHello = (): string => `${this.repository.hello()} World From Reprovider`;
  sayGoodbye = (): string => `${this.repository.goodBay()} World From Reprovider`;
}

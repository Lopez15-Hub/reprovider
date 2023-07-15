import { Service } from "./interfaces/service.interface";
import Provider from "./provider";

/**
 * Class responsible for registering and consuming services.
 */
export class Consumer {
  private context: Provider;

  /**
   * Registers a service with its dependencies.
   * @param {Service[]} services - Service to register.
   */
  constructor(services: Service[]) {
    this.context = Provider.createContext();
    services.forEach((service) =>
      this.context.register(service.service, service.dependencies)
    );
  }

  /**
   * Consumes a service by providing its type.
   * @param {new (...args: any[]) => T} service The type of the service to consume.
   * @returns {T} - The instance of the consumed service.
   * @example
   * const consumer = new Consumer([MyService1])
   * consumer.get(MyService1)
   */
  get = <T>(service: new (...args: any[]) => T): T =>
    this.context.select(service);
}

import { ProviderContext } from "./provider.context";

/**
 * Acts like a Service provider
 */
export default class Provider {
  /**
   * Registered services in the provider context.
   * @type { [key: string]: any }
   */
  services: { [key: string]: any } = {};
  /**
   * Creates a provider context.
   * @returns {Provider} Instance of Provider
   * @static
   */
  static createContext = (): Provider => ProviderContext.get(new Provider());
  /**
   * Register a new service in provider
   * @param {FunctionConstructor} service - Service Reference
   * @param {FunctionConstructor[]} dependencies - dependencies to inject into the service
   */
  register(service: FunctionConstructor, dependencies: FunctionConstructor[]) {
    const serviceName = service.name;

    this.services[serviceName] = {
      service,
      dependencies,
    };

    dependencies.forEach((dependency) => {
      const dependencyName = dependency.name;
      this.services[dependencyName] = {
        service: dependency,
      };
    });
  }
  /**
   * Select a service registered in provider.
   * @param {any} service - Service reference
   * @returns {any} Instance of selectedService
   * @throws {Error} Throws an error If the service is not registered.
   */
  select(service: any): any {
    const serviceName = service.name;
    if (!(serviceName in this.services)) {
      throw new Error(`Service '${serviceName}' is not registered`);
    }

    const { service: resolvedService, dependencies } =
      this.services[serviceName];
    if (typeof resolvedService === "function") {
      if (dependencies && dependencies.length > 0) {
        const resolvedDependencies = dependencies.map(
          (dependency: FunctionConstructor) => this.select(dependency)
        );
        return new resolvedService(...resolvedDependencies);
      }
      return new resolvedService();
    }
    return resolvedService;
  }
}

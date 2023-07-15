import { useContext } from "react";
import { ServiceContext } from "../../components/ServiceProvider.context";
/**
 * Custom hook for accessing a service provider.
 * @param {new (...args: any[]) => T} service - The type of service  to retrieve from the provider.
 * @returns {Object} An object containing the instance of the requested service.
 * @example:
 * const SayHello = () => {
  const { provider: greetsService } = useProvider(GreetsService);
  return (
    <div>
      <h1>{greetsService.sayHello()}</h1>
    </div>
  );
};
 */
const useProvider = <T,>(
  service: new (...args: any[]) => T
): { provider: T } => {
  const context = useContext(ServiceContext);

  const provider: T = context.consumer?.get(service)!;

  return { provider }!;
};

export default useProvider;

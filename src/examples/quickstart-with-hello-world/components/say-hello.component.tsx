import useProvider from "../../../hook/useProvider/useProvider.hook";
import { GreetsService } from "../core/services/greets.service";

/**
 * Show a simple hello world
 *  
 */
const SayHello = () => {
  /**
   * Optional: Also we can rename the provider or use the standard reference.
   * Is recommended rename the provider for understand the code better
   */
  const { provider: greetsService } = useProvider(GreetsService);

  return (
    <div>
      <h1>{greetsService.sayHello()}</h1>
    </div>
  );
};

export default SayHello;

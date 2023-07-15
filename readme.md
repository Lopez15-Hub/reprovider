![Texto alternativo](./logo.png)

# Reprovider

A minimalist package created created for manage services using depedency injection easly and quickly.

## Overview

When our react app is scaling sometimes is necessary that we organize the logic for get a best understanding of our code.

Reprovider is designed for developers that want get a quickly and organized storage in a react application using techniques like the Dependency Injection very simple.

With reprovider we can create services and consume into a component or outside of it.

## How it works

![Texto alternativo](./how-it-works.png)

# Quick start

### Install

with npm:

```powershell
    npm i reprovider
```

### Using Reprovider

First create the repository, it can contains the interacions with an A.P.I or Database.

_greets.repository.ts_

```typescript
export class GreetsRepository {
  hello = () => "Hello ";
  goodBay = () => "Goodbay ";
}
```

Now create the service and inject the repository into constructor.

_greets.service.ts_

```typescript
import { GreetsRepository } from "../repository/greets.repository";

export class GreetsService {
  constructor(private readonly repository: GreetsRepository) {}
  sayHello = (): string => `${this.repository.hello()} World From Reprovider`;
  sayGoodbye = (): string =>
    `${this.repository.goodBay()} World From Reprovider`;
}
```

Its time to create the registry file. 

It contains all services with its dependencies that will register into ServiceProvider

_registry.ts_

```typescript
import { GreetsService } from "./services/greets.service";
import { GreetsRepository } from "./repository/greets.repository";
import { Service } from "../../../core/reprovider";

export const services: Service[] = [
  {
    description: "Service for greeting people",
    service: GreetsService,
    dependencies: [GreetsRepository],
  },
];
```

Once do you configure the services and declared into registry file. FInally we can inject the services into the app.

For that, add the ServiceProvider at the top of the app.

The service provided will be responsible of create the context that we will using later calling the useProvider hook.


_app.tsx_

```typescript
import { ServiceProvider } from "../../components/ServiceProvider";
import SayHello from "./components/say-hello.component";
import { services } from "./core/registry";

const App = (): JSX.Element => {
  return (
    <ServiceProvider services={services}>
      <SayHello />
    </ServiceProvider>
  );
};

export default App;
```


### Say hello with useProvider


Finally, just import the useProvider, pass the reference of Service that you wan use and desestructure the provider to use.

Optional: You can rename the provider as you want. This is recommended for understand the code better.


_say-hello.component.tsx_

```typescript
import { useProvider } from "../../../src/core/reprovider";
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
```



## Examples

You can view the examples follow this  *[link](https://github.com/Lopez15-Hub/reprovider/tree/master/examples)*

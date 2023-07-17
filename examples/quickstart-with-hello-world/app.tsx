import React from "react";
import { ServiceProvider } from "reprovider";
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

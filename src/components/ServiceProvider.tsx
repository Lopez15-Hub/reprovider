import React, { useState } from "react";
import { ServiceProviderProps } from "./ServiceProvider.props";
import { ServiceProviderChildsProps } from "./ServiceProviderChilds.props";
import { ServiceContext } from "./ServiceProvider.context";
import { Consumer } from "../core/consumer";
import { Context } from "../core/interfaces/context.interface";

export const ServiceProvider: React.FC<ServiceProviderProps> = ({
  children,
  services,
}: ServiceProviderProps) => {
  const [consumer] = useState(() => new Consumer(services));

  const contextValue: Context = {
    consumer,
  };

  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      const childProps: ServiceProviderChildsProps = {
        context: contextValue,
      };
      return React.cloneElement(child, childProps);
    }
    return child;
  });

  return (
    <ServiceContext.Provider value={contextValue}>
      {childrenWithProps}
    </ServiceContext.Provider>
  );
};

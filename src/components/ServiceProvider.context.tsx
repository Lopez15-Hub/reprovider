import React from "react";
import { Consumer } from "../core/consumer";

export const ServiceContext = React.createContext<{
  consumer: Consumer | null;
}>({
  consumer: null,
});

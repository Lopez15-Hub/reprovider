import { Service } from "../core/interfaces/service.interface";

export interface ServiceProviderProps {
  services: Service[];
  children: React.ReactNode;
}

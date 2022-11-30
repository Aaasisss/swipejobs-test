import { AddressProps } from "./JobPropTypes";

export interface WorkerProps {
  address: AddressProps;
  email: string;
  firstName: string;
  lastName: string;
  maxJobDistance: number;
  phoneNumber: string;
  workerId: string;
}

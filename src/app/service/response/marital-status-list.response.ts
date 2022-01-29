import { MaritalStatus } from './../model/marital-status.model';
export interface MaritalStatusListResponse {
  error          : boolean,
  message        : string,
  length         : number,
  marital_status : MaritalStatus[]
}

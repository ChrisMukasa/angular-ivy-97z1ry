import { Schooling } from './../model/schooling.model';
export interface SchoolingResponse {
  error    : boolean,
  message  : string,
  schooling: Schooling
}

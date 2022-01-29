import { Avenue } from './../model/avenue.model';
export interface AvenueResponse {
  error   : boolean,
  message : string,
  avenue  : Avenue
}

import { Water } from './../model/water.model';
export interface WatersResponse {
  error   : boolean,
  message : string,
  length  : number,
  waters  : Water[]
}

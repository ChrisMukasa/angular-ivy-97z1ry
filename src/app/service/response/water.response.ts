import { Water } from './../model/water.model';
export interface WaterResponse {
  error   : boolean,
  message : string,
  water   : Water
}

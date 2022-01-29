import { Religion } from './../model/religion.model';
export interface ReligionsResponse {
  error     : boolean,
  message   : string,
  length    : number,
  religions : Religion[]
}

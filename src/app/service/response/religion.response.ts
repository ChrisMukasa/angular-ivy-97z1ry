import { Religion } from './../model/religion.model';
export interface ReligionResponse {
  error    : boolean,
  message  : string,
  religion : Religion
}

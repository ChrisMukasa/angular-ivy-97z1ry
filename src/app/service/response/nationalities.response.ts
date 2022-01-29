import { Nationality } from './../model/nationality.model';
export interface NationalitiesResponse {
  error        : boolean,
  message      : string,
  length       : number,
  nationalities: Nationality[]
}

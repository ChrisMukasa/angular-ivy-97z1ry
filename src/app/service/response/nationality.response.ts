import { Nationality } from './../model/nationality.model';
export interface NationalityResponse {
  error        : boolean,
  message      : string,
  nationality  : Nationality
}

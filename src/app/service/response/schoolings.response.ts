import { Schooling } from './../model/schooling.model';
export interface SchoolingsResponse {
  error      : boolean,
  message    : string,
  length     : number,
  schoolings : Schooling[]
}

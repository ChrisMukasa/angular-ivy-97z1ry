import { Household } from './../model/household.model';
export interface HouseholdsResponse {
  error      : boolean,
  message    : string,
  length     : number,
  households : Household[]
}

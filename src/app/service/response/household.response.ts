import { Household } from './../model/household.model';
export interface HouseholdResponse {
  error     : boolean,
  message   : string,
  household : Household
}

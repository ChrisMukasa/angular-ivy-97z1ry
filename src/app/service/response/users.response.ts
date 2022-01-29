import { User } from './../model/user.model';
export interface UsersResponse {
  error   : boolean,
  message : string,
  users   : User[]
}

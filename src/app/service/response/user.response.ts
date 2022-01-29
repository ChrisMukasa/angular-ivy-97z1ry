import { User } from './../model/user.model';
export interface UserResponse {
  error   : boolean,
  message : string,
  user    : User
}

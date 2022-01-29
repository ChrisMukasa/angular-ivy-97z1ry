import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from './model/user.model';
import { StandardResponse } from './response/standard.reponse';
import { UserResponse } from './response/user.response';
import { UsersResponse } from './response/users.response';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private api: HttpClient) { }

  signIn(form: any) : Observable<UserResponse> {
    return this.api.post<any>(environment.base_url +`/user/login`, {
      phone    : form.phone,
      password : form.password
    });
  }

  signUp(user: User) : Observable<StandardResponse> {
    return this.api.post<any>(environment.base_url +`/user`, {
      fullname : user.fullname,
      gender   : user.gender,
      dob      : user.dob,
      pob      : user.pob,
      phone    : user.phone,
      address  : user.address,
      password : user.password
    });
  }

  update(id: number, user: User) : Observable<StandardResponse> {
    return this.api.put<any>(environment.base_url +`/user/${id}`, {
      fullname : user.fullname,
      gender   : user.gender,
      dob      : user.dob,
      pob      : user.pob,
      phone    : user.phone,
      address  : user.address,
      password : user.password
    });
  }

  delete(id: number) : Observable<StandardResponse> {
    return this.api.delete<any>(environment.base_url +`/user/${id}`)
  }

  get() : Observable<UsersResponse> {
    return this.api.get<UsersResponse>(environment.base_url +"/user")
  }

  getById(id: number) : Observable<UserResponse> {
    return this.api.get<UserResponse>(environment.base_url +`/user/${id}`)
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MaritalStatus } from './model/marital-status.model';
import { MaritalStatusListResponse } from './response/marital-status-list.response';
import { MaritalStatusResponse } from './response/marital-status.response';
import { Observable } from 'rxjs';
import { StandardResponse } from './response/standard.reponse';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class MaritalStatusService {

  constructor(private api: HttpClient) { }

  create(marital_status: MaritalStatus) : Observable<MaritalStatusResponse> {
    return this.api.post<any>(environment.base_url +`/marital_status/${marital_status.id}`, {
      designation : marital_status.designation
    });
  }

  update(id: string, marital_status: MaritalStatus) : Observable<MaritalStatusResponse> {
    return this.api.put<any>(environment.base_url +`/marital_status/${id}`, {
      designation : marital_status.designation
    });
  }

  delete(id: string) : Observable<StandardResponse> {
    return this.api.delete<any>(environment.base_url +`/marital_status/${id}`)
  }

  get() : Observable<MaritalStatusListResponse> {
    return this.api.get<MaritalStatusListResponse>(environment.base_url +"/marital_status")
  }

  getById(id: string) : Observable<MaritalStatusResponse> {
    return this.api.get<MaritalStatusResponse>(environment.base_url +`/marital_status/${id}`)
  }
}

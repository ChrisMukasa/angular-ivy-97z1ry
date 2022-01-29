import { Avenue } from './model/avenue.model';
import { AvenueResponse } from './response/avenue.reponse';
import { AvenuesResponse } from './response/avenues.reponse';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs';
import { StandardResponse } from './response/standard.reponse';
import { environment } from './../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AvenueService {

  constructor(private api: HttpClient) { }

  create(id_district: number, avenue: Avenue) : Observable<AvenueResponse> {
    return this.api.post<any>(environment.base_url +`/avenue/${id_district}`, {
      designation : avenue.designation
    });
  }

  update(id_district: number, id: number, avenue: Avenue) : Observable<AvenueResponse> {
    return this.api.put<any>(environment.base_url +`/avenue/${id}/${id_district}`, {
      designation : avenue.designation
    });
  }

  delete(id: number) : Observable<StandardResponse> {
    return this.api.delete<any>(environment.base_url +`/avenue/${id}`)
  }

  get() : Observable<AvenuesResponse> {
    return this.api.get<AvenuesResponse>(environment.base_url +"/avenue")
  }

  getById(id: number) : Observable<AvenueResponse> {
    return this.api.get<AvenueResponse>(environment.base_url +`/avenue/${id}`)
  }
}

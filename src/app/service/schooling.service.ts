import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Schooling } from './model/schooling.model';
import { SchoolingResponse } from './response/schooling.response';
import { SchoolingsResponse } from './response/schoolings.response';
import { StandardResponse } from './response/standard.reponse';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SchoolingService {

  constructor(private api: HttpClient) { }

  create(schooling: Schooling) : Observable<SchoolingResponse> {
    return this.api.post<any>(environment.base_url +`/schooling/${schooling.id}`, {
      designation : schooling.designation
    });
  }

  update(id: string, schooling: Schooling) : Observable<SchoolingResponse> {
    return this.api.put<any>(environment.base_url +`/schooling/${id}`, {
      designation : schooling.designation
    });
  }

  delete(id: string) : Observable<StandardResponse> {
    return this.api.delete<any>(environment.base_url +`/schooling/${id}`)
  }

  get() : Observable<SchoolingsResponse> {
    return this.api.get<SchoolingsResponse>(environment.base_url +"/schooling")
  }

  getById(id: string) : Observable<SchoolingResponse> {
    return this.api.get<SchoolingResponse>(environment.base_url +`/schooling/${id}`)
  }
}

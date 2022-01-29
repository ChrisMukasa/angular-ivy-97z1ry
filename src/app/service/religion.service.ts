import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Religion } from './model/religion.model';
import { ReligionResponse } from './response/religion.response';
import { ReligionsResponse } from './response/religions.response';
import { StandardResponse } from './response/standard.reponse';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReligionService {

  constructor(private api: HttpClient) { }

  create(religion: Religion) : Observable<ReligionResponse> {
    return this.api.post<any>(environment.base_url +`/religion`, {
      designation : religion.designation
    });
  }

  update(id: number, religion: Religion) : Observable<ReligionResponse> {
    return this.api.put<any>(environment.base_url +`/religion/${id}`, {
      designation : religion.designation
    });
  }

  delete(id: number) : Observable<StandardResponse> {
    return this.api.delete<any>(environment.base_url +`/religion/${id}`)
  }

  get() : Observable<ReligionsResponse> {
    return this.api.get<ReligionsResponse>(environment.base_url +"/religion")
  }

  getById(id: number) : Observable<ReligionResponse> {
    return this.api.get<ReligionResponse>(environment.base_url +`/religion/${id}`)
  }
}

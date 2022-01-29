import { Commune } from './model/commune.model'
import { CommuneResponse } from './response/commune.reponse';
import { CommunesResponse } from './response/communes.reponse';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs';
import { StandardResponse } from './response/standard.reponse';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class CommuneService {

  constructor(private api: HttpClient) { }

  create(id_city: number, commune: Commune) : Observable<CommuneResponse> {
    return this.api.post<any>(environment.base_url +`/commune/${id_city}`, {
      designation : commune.designation
    });
  }

  update(id_city: number, id: number, commune: Commune) : Observable<CommuneResponse> {
    return this.api.put<any>(environment.base_url +`/commune/${id}/${id_city}`, {
      designation : commune.designation
    });
  }

  delete(id: number) : Observable<StandardResponse> {
    return this.api.delete<any>(environment.base_url +`/commune/${id}`)
  }

  get() : Observable<CommunesResponse> {
    return this.api.get<CommunesResponse>(environment.base_url +"/commune")
  }

  getById(id: number) : Observable<CommuneResponse> {
    return this.api.get<CommuneResponse>(environment.base_url +`/commune/${id}`)
  }
}

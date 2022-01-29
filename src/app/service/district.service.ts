import { District } from './model/district.model';
import { DistrictResponse } from './response/district.reponse';
import { DistrictsResponse } from './response/districts.reponse';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs';
import { StandardResponse } from './response/standard.reponse';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class DistrictService {

  constructor(private api: HttpClient) { }

  create(id_commune: number, district: District) : Observable<DistrictResponse> {
    return this.api.post<any>(environment.base_url +`/district/${id_commune}`, {
      designation : district.designation
    });
  }

  update(id_commune: number, id: number, district: District) : Observable<DistrictResponse> {
    return this.api.put<any>(environment.base_url +`/district/${id}/${id_commune}`, {
      designation : district.designation
    });
  }

  delete(id: number) : Observable<StandardResponse> {
    return this.api.delete<any>(environment.base_url +`/district/${id}`)
  }

  get() : Observable<DistrictsResponse> {
    return this.api.get<DistrictsResponse>(environment.base_url +"/district")
  }

  getById(id: number) : Observable<DistrictResponse> {
    return this.api.get<DistrictResponse>(environment.base_url +`/district/${id}`)
  }
}

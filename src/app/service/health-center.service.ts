import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HealthCenter } from './model/health-center.model';
import { HealthCenterResponse } from './response/health-center.response';
import { HealthCentersResponse } from './response/health-centers.response';
import { StandardResponse } from './response/standard.reponse';

@Injectable({
  providedIn: 'root'
})
export class HealthCenterService {

  constructor(private api: HttpClient) { }

  create(id: number, health_center: HealthCenter) : Observable<HealthCenterResponse> {
    return this.api.post<any>(environment.base_url +`/health_center/${id}`, {
      designation : health_center.designation
    });
  }

  update(id: number, id_health_zone: number, HealthCenter: HealthCenter) : Observable<HealthCenterResponse> {
    return this.api.put<any>(environment.base_url +`/health_center/${id}/${id_health_zone}`, {
      designation : HealthCenter.designation
    });
  }

  delete(id: number) : Observable<StandardResponse> {
    return this.api.delete<any>(environment.base_url +`/health_center/${id}`)
  }

  get() : Observable<HealthCentersResponse> {
    return this.api.get<HealthCentersResponse>(environment.base_url +"/health_center")
  }

  getById(id: number) : Observable<HealthCenterResponse> {
    return this.api.get<HealthCenterResponse>(environment.base_url +`/health_center/${id}`)
  }
}

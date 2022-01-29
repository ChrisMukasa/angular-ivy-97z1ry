import { HealthZone } from './model/health-zone.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HealthZoneResponse } from './response/health-zone.response';
import { HealthZonesResponse } from './response/health-zones.response';
import { StandardResponse } from './response/standard.reponse';

@Injectable({
  providedIn: 'root'
})
export class HealthZoneService {

  constructor(private api: HttpClient) { }

  create(health_zone: HealthZone) : Observable<HealthZoneResponse> {
    return this.api.post<any>(environment.base_url +`/health_zone`, {
      designation : health_zone.designation
    });
  }

  update(id: number, health_zone: HealthZone) : Observable<HealthZoneResponse> {
    return this.api.put<any>(environment.base_url +`/health_zone/${id}`, {
      designation : health_zone.designation
    });
  }

  delete(id: number) : Observable<StandardResponse> {
    return this.api.delete<any>(environment.base_url +`/health_zone/${id}`)
  }

  get() : Observable<HealthZonesResponse> {
    return this.api.get<HealthZonesResponse>(environment.base_url +"/health_zone")
  }

  getById(id: number) : Observable<HealthZoneResponse> {
    return this.api.get<HealthZoneResponse>(environment.base_url +`/health_zone/${id}`)
  }
}

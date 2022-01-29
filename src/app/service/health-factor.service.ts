import { HealthFactor } from './model/health-factor.model';
import { HealthFactorResponse } from './response/health-factor.response';
import { HealthFactorsResponse } from './response/health-factors.response';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StandardResponse } from './response/standard.reponse';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HealthFactorService {

  constructor(private api: HttpClient) { }

  create(health_factor: HealthFactor) : Observable<HealthFactorResponse> {
    return this.api.post<any>(environment.base_url +`/health_factor/${health_factor.id_household}`, {
      family_diseases      : health_factor.family_diseases,
      other_family_diseases: health_factor.other_family_diseases,
      usual_use_service    : health_factor.usual_use_service,
      sync                 : 1
    });
  }

  update(id: number, health_factor: HealthFactor) : Observable<HealthFactorResponse> {
    return this.api.put<any>(environment.base_url +`/health_factor/${id}/${health_factor.id_household}`, {
      family_diseases      : health_factor.family_diseases,
      other_family_diseases: health_factor.other_family_diseases,
      usual_use_service    : health_factor.usual_use_service,
      sync                 : 1
    });
  }

  delete(id: number) : Observable<StandardResponse> {
    return this.api.delete<any>(environment.base_url +`/health_factor/${id}`)
  }

  get() : Observable<HealthFactorsResponse> {
    return this.api.get<HealthFactorsResponse>(environment.base_url +"/health_factor")
  }

  getById(id: number) : Observable<HealthFactorResponse> {
    return this.api.get<HealthFactorResponse>(environment.base_url +`/health_factor/${id}`)
  }
}

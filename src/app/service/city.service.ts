import { CitiesResponse } from './response/cities.reponse';
import { City } from './model/city.model'
import { CityResponse } from './response/city.reponse';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs';
import { StandardResponse } from './response/standard.reponse';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class CityService {

  constructor(private api: HttpClient) { }

  create(city: City) : Observable<CityResponse> {
    return this.api.post<any>(environment.base_url +`/city`, {
      designation : city.designation
    });
  }

  update(id: number, city: City) : Observable<CityResponse> {
    return this.api.put<any>(environment.base_url +`/city/${id}`, {
      designation : city.designation
    });
  }

  delete(id: number) : Observable<StandardResponse> {
    return this.api.delete<any>(environment.base_url +`/city/${id}`)
  }

  get() : Observable<CitiesResponse> {
    return this.api.get<CitiesResponse>(environment.base_url +"/city")
  }

  getById(id: number) : Observable<CityResponse> {
    return this.api.get<CityResponse>(environment.base_url +`/city/${id}`)
  }
}

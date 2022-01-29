import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Water } from './model/water.model';
import { StandardResponse } from './response/standard.reponse';
import { WaterResponse } from './response/water.response';
import { WatersResponse } from './response/waters.response';

@Injectable({
  providedIn: 'root'
})
export class WaterService {

  constructor(private api: HttpClient) { }

  create(water: Water) : Observable<WaterResponse> {
    return this.api.post<any>(environment.base_url +`/water`, {
      designation : water.designation
    });
  }

  update(id: number, water: Water) : Observable<WaterResponse> {
    return this.api.put<any>(environment.base_url +`/water/${id}`, {
      designation : water.designation
    });
  }

  delete(id: number) : Observable<StandardResponse> {
    return this.api.delete<any>(environment.base_url +`/water/${id}`)
  }

  get() : Observable<WatersResponse> {
    return this.api.get<WatersResponse>(environment.base_url +"/water")
  }

  getById(id: number) : Observable<WaterResponse> {
    return this.api.get<WaterResponse>(environment.base_url +`/water/${id}`)
  }
}

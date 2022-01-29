import { Household } from './model/household.model'
import { HouseholdResponse } from './response/household.response'
import { HouseholdsResponse } from './response/households.response'
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { StandardResponse } from './response/standard.reponse'
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class HouseholdService {

  list   : number[] = []
  id    !: any

  constructor(private api: HttpClient) { }

  create(id: string, household: Household) : Observable<HouseholdResponse> {
    return this.api.post<any>(environment.base_url +`/household/${id}`, {
      id_health_zone   : household.id_health_zone,
      id_health_center : household.id_health_center,
      id_city          : household.id_city,
      id_commune       : household.id_commune,
      id_district      : household.id_district,
      id_avenue        : household.id_avenue,
      id_user          : 1,
      number           : household.number,
      latitude         : household.latitude,
      longitude        : household.longitude,
      state            : household.state,
      sync             : 1
    })
  }

  update(id: number, household: Household) : Observable<HouseholdResponse> {
    return this.api.put<any>(environment.base_url +`/household/${id}`, {
      id_health_zone   : household.id_health_zone,
      id_health_center : household.id_health_center,
      id_city          : household.id_city,
      id_commune       : household.id_commune,
      id_district      : household.id_district,
      id_avenue        : household.id_avenue,
      id_user          : 1,
      number           : household.number,
      latitude         : household.latitude,
      longitude        : household.longitude,
      state            : household.state,
      sync             : 1
    })
  }

  delete(id: number) : Observable<StandardResponse> {
    return this.api.delete<any>(environment.base_url +`/household/${id}`)
  }

  get() : Observable<HouseholdsResponse> {
    return this.api.get<HouseholdsResponse>(environment.base_url +"/household")
  }

  getById(id: number) : Observable<HouseholdResponse> {
    return this.api.get<HouseholdResponse>(environment.base_url +`/household/${id}`)
  }

  getLastHousehold(prefix: String, households: Household[]) : number[] {
    households.forEach((element) => {
      if(element.id != null){
        var _prefix = element.id.split('.')[0]
        if(element.id.substring(0, 8) == prefix){
          this.id = (_prefix.substring(8, _prefix.length))
          console.log(this.id)
          this.list.push(this.id)
        }
      }
    })
    
    return this.list
  }
}

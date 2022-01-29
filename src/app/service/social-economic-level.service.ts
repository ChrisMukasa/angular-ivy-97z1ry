import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SocialEconomicLevel } from './model/social-economic-level.model';
import { SocialEconomicLevelResponse } from './response/socio-economic-level.response';
import { SocialEconomicLevelsResponse } from './response/socio-economic-levels.response';
import { StandardResponse } from './response/standard.reponse';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SocialEconomicLevelService {

  constructor(private api: HttpClient) { }

  create(social_economic_level: SocialEconomicLevel): Observable<SocialEconomicLevelResponse> {
    return this.api.post<any>(environment.base_url + `/social_economic_level`, {
      id_household                : social_economic_level.id_household,
      profession_head_of_household: social_economic_level.profession_head_of_household,
      other_profession            : social_economic_level.other_profession,
      usual_source_of_income      : social_economic_level.usual_source_of_income,
      proprio_location            : social_economic_level.proprio_location,
      rent_amount                 : social_economic_level.rent_amount,
      number_habitation           : social_economic_level.number_habitation,
      number_of_member            : social_economic_level.number_of_member,
      bedroom                     : social_economic_level.bedroom,
      other_factor                : social_economic_level.other_factor,
      capacity_cost               : social_economic_level.capacity_cost,
      payment_type                : social_economic_level.payment_type,
      other_info                  : social_economic_level.other_info,
      sync                        : 1
    });
  }

  update(id: number, social_economic_level: SocialEconomicLevel): Observable<SocialEconomicLevelResponse> {
    return this.api.put<any>(environment.base_url + `/social_economic_level/${id}`, {
      id_household                : social_economic_level.id_household,
      profession_head_of_household: social_economic_level.profession_head_of_household,
      other_profession            : social_economic_level.other_profession,
      usual_source_of_income      : social_economic_level.usual_source_of_income,
      proprio_location            : social_economic_level.proprio_location,
      rent_amount                 : social_economic_level.rent_amount,
      number_habitation           : social_economic_level.number_habitation,
      number_of_member            : social_economic_level.number_of_member,
      bedroom                     : social_economic_level.bedroom,
      other_factor                : social_economic_level.other_factor,
      capacity_cost               : social_economic_level.capacity_cost,
      payment_type                : social_economic_level.payment_type,
      other_info                  : social_economic_level.other_info,
      sync                        : 1
    });
  }

  delete(id: number): Observable<StandardResponse> {
    return this.api.delete<any>(environment.base_url + `/social_economic_level/${id}`)
  }

  get(): Observable<SocialEconomicLevelsResponse> {
    return this.api.get<SocialEconomicLevelsResponse>(environment.base_url + "/social_economic_level")
  }

  getById(id: number): Observable<SocialEconomicLevelResponse> {
    return this.api.get<SocialEconomicLevelResponse>(environment.base_url + `/social_economic_level/${id}`)
  }
}

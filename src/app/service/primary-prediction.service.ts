import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PrimaryPrediction } from './model/primary-prediction.model';
import { PrimaryPredictionResponse } from './response/primary-prediction.response';
import { PrimaryPredictionsResponse } from './response/primary-predictions.response';
import { StandardResponse } from './response/standard.reponse';

@Injectable({
  providedIn: 'root'
})
export class PrimaryPredictionService {

  constructor(private api: HttpClient) { }

  create(primary_prediction: PrimaryPrediction) : Observable<PrimaryPredictionResponse> {
    return this.api.post<any>(environment.base_url +`/primary_prediction`, {
      id_household             : primary_prediction.id_household,
      id_water                 : primary_prediction.id_water,
      id_religion              : primary_prediction.id_religion,
      id_nationality           : primary_prediction.id_nationality,
      light_petrol             : primary_prediction.light_petrol,
      light_sun                : primary_prediction.light_sun,
      light_public             : primary_prediction.light_public,
      other_light              : primary_prediction.other_light,
      toilet_inside            : primary_prediction.toilet_inside,
      toilet_outside           : primary_prediction.toilet_outside,
      other_toilet             : primary_prediction.other_toilet,
      mosquito_net_number      : primary_prediction.mosquito_net_number,
      mosquito_net_used_number : primary_prediction.mosquito_net_used_number,
      mosquito_net_state_used  : 0,
      french                   : primary_prediction.french,
      english                  : primary_prediction.english,
      kiswahili                : primary_prediction.kiswahili,
      lingala                  : primary_prediction.lingala,
      hygiene_habitat          : primary_prediction.hygiene_habitat,
      other_hygiene_habitat    : primary_prediction.other_hygiene_habitat,
      other                    : primary_prediction.other,
      sync                     : 1
    });
  }

  update(id: number, primary_prediction: PrimaryPrediction) : Observable<PrimaryPredictionResponse> {
    return this.api.put<any>(environment.base_url +`/primary_prediction/${id}`, {
      id_household             : primary_prediction.id_household,
      id_water                 : primary_prediction.id_water,
      id_religion              : primary_prediction.id_religion,
      id_nationality           : primary_prediction.id_nationality,
      light_petrol             : primary_prediction.light_petrol,
      light_sun                : primary_prediction.light_sun,
      light_public             : primary_prediction.light_public,
      other_light              : primary_prediction.other_light,
      toilet_inside            : primary_prediction.toilet_inside,
      toilet_outside           : primary_prediction.toilet_outside,
      other_toilet             : primary_prediction.other_toilet,
      mosquito_net_number      : primary_prediction.mosquito_net_number,
      mosquito_net_used_number : primary_prediction.mosquito_net_used_number,
      mosquito_net_state_used  : 0,
      french                   : primary_prediction.french,
      english                  : primary_prediction.english,
      kiswahili                : primary_prediction.kiswahili,
      lingala                  : primary_prediction.lingala,
      hygiene_habitat          : primary_prediction.hygiene_habitat,
      other_hygiene_habitat    : primary_prediction.other_hygiene_habitat,
      other                    : primary_prediction.other,
      sync                     : 1
    });
  }

  delete(id: number) : Observable<StandardResponse> {
    return this.api.delete<any>(environment.base_url +`/primary_prediction/${id}`)
  }

  get() : Observable<PrimaryPredictionsResponse> {
    return this.api.get<PrimaryPredictionsResponse>(environment.base_url +"/primary_prediction")
  }

  getById(id: number) : Observable<PrimaryPredictionResponse> {
    return this.api.get<PrimaryPredictionResponse>(environment.base_url +`/primary_prediction/${id}`)
  }
}

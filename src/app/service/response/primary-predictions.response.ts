import { PrimaryPrediction } from './../model/primary-prediction.model';
export interface PrimaryPredictionsResponse {
  error               : boolean,
  message             : string,
  length              : number,
  primary_predictions : PrimaryPrediction[]
}

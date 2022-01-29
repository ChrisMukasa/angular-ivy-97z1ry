import { PrimaryPrediction } from './../model/primary-prediction.model';
export interface PrimaryPredictionResponse {
  error              : boolean,
  message            : string,
  primary_prediction : PrimaryPrediction
}

import { HealthFactor } from './../model/health-factor.model';
export interface HealthFactorsResponse {
  error          : boolean,
  message        : string,
  length         : number,
  health_factors : HealthFactor[]
}

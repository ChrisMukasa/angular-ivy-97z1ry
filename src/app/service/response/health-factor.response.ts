import { HealthFactor } from './../model/health-factor.model';
export interface HealthFactorResponse {
  error         : boolean,
  message       : string,
  health_factor : HealthFactor
}

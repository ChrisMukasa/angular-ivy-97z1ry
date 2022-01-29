import { HealthCenter } from './../model/health-center.model';
export interface HealthCentersResponse {
  error          : boolean,
  message        : string,
  length         : number,
  health_centers : HealthCenter[]
}

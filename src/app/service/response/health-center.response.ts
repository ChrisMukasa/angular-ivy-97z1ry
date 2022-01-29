import { HealthCenter } from './../model/health-center.model';
export interface HealthCenterResponse {
  error         : boolean,
  message       : string,
  health_center : HealthCenter
}

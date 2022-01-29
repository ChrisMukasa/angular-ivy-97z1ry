import { HealthZone } from './../model/health-zone.model';
export interface HealthZoneResponse {
  error       : boolean,
  message     : string,
  health_zone : HealthZone
}

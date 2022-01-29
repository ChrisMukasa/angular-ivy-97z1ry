import { HealthZone } from './../model/health-zone.model';
export interface HealthZonesResponse {
  error        : boolean,
  message      : string,
  length       : number,
  health_zones : HealthZone[]
}

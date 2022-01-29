import { District } from '../model/district.model';
export interface DistrictResponse {
    error   : boolean,
    message : string,
    district: District
}
import { City } from '../model/city.model';
export interface CityResponse {
    error   : boolean,
    message : string,
    city    : City
}
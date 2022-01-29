import { City } from '../model/city.model';
export interface CitiesResponse {
    error  : boolean,
    message: string,
    length : number,
    cities : City[]
}

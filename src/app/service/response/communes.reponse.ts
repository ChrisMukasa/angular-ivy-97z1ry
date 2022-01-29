import { Commune } from '../model/commune.model';
export interface CommunesResponse {
    error    : boolean,
    message  : string,
    length   : number,
    communes : Commune[]
}

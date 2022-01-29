import { Avenue } from '../model/avenue.model';
export interface AvenuesResponse {
    error   : boolean,
    message : string,
    length  : number,
    avenues : Avenue[]
}

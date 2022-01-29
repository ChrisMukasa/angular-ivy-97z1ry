import { Commune } from './../model/commune.model';
export interface CommuneResponse {
    error   : boolean,
    message : string,
    commune : Commune
}
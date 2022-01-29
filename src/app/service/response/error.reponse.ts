import { Error } from './../model/error.model';
export interface ErrorResponse {
    error   : boolean,
    message : Error[],
}
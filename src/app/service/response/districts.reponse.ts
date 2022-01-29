import { District } from '../model/district.model';
export interface DistrictsResponse {
    error     : boolean,
    message   : string,
    length    : number,
    districts : District[]
}

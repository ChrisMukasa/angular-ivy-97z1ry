import { Member } from '../model/member.model';
export interface MembersResponse {
    error  : boolean,
    message: string,
    length : number,
    members: Member[]
}

import { Member } from './../model/member.model';
export interface MemberResponse {
    error  : boolean,
    message: string,
    member : Member
}

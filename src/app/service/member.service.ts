import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { Member } from './model/member.model'
import { MemberResponse } from './response/member.response';
import { MembersResponse } from './response/members.response';
import { Observable } from 'rxjs';
import { StandardResponse } from './response/standard.reponse';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class MemberService {

  constructor(private api: HttpClient) { }

  create(member: Member): Observable<MemberResponse> {
    return this.api.post<any>(environment.base_url +`/member`, {
      id_household     : member.id_household     ,
      id_relationship  : member.id_relationship  ,
      id_marital_status: member.id_marital_status,
      id_schooling     : member.id_schooling     ,
      id_religion      : member.id_religion      ,
      id_nationality   : 1                       ,
      fullname         : member.fullname         ,
      gender           : member.gender           ,
      dob              : member.dob.toString().substring(0, 10),
      pob              : member.pob              ,
      blood_group      : 'A'                     ,
      phone            : member.phone            ,
      mutual           : member.mutual           ,
      profession       : member.profession       ,
      alergy           : member.alergy           ,
      observation      : member.observation      ,
      sync             : 1
    });
  }

  update(id: number, member: Member) : Observable<MemberResponse> {
    return this.api.put<any>(environment.base_url +`/member/${id}`, {
      id_household     : member.id_household     ,
      id_relationship  : member.id_relationship  ,
      id_marital_status: member.id_marital_status,
      id_schooling     : member.id_schooling     ,
      id_religion      : member.id_religion      ,
      id_nationality   : 1                       ,
      fullname         : member.fullname         ,
      gender           : member.gender           ,
      dob              : member.dob.toString().substring(0, 10),
      pob              : member.pob              ,
      blood_group      : 'A'                     ,
      phone            : member.phone            ,
      mutual           : member.mutual           ,
      profession       : member.profession       ,
      alergy           : member.alergy           ,
      observation      : member.observation      ,
      sync             : 1
    });
  }

  delete(id: number) : Observable<StandardResponse> {
    return this.api.delete<any>(environment.base_url +`/member/${id}`)
  }

  get() : Observable<MembersResponse> {
    return this.api.get<MembersResponse>(environment.base_url +"/member")
  }

  getAllById(id: string) : Observable<MembersResponse> {
    return this.api.get<MembersResponse>(environment.base_url +`/member/all/${id}`)
  }

  getById(id: string) : Observable<MemberResponse> {
    return this.api.get<MemberResponse>(environment.base_url +`/member/${id}`)
  }
}

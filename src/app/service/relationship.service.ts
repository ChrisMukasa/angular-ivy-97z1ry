import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Relationship } from './model/relationship.model';
import { RelationshipResponse } from './response/relationship.response';
import { RelationshipsResponse } from './response/relationships.response';
import { StandardResponse } from './response/standard.reponse';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RelationshipService {

  constructor(private api: HttpClient) { }

  create(relationship: Relationship) : Observable<RelationshipResponse> {
    return this.api.post<any>(environment.base_url +`/relationship/${relationship.id}`, {
      designation : relationship.designation
    });
  }

  update(id: string, relationship: Relationship) : Observable<RelationshipResponse> {
    return this.api.put<any>(environment.base_url +`/relationship/${id}`, {
      designation : relationship.designation
    });
  }

  delete(id: string) : Observable<StandardResponse> {
    return this.api.delete<any>(environment.base_url +`/relationship/${id}`)
  }

  get() : Observable<RelationshipsResponse> {
    return this.api.get<RelationshipsResponse>(environment.base_url +"/relationship")
  }

  getById(id: string) : Observable<RelationshipResponse> {
    return this.api.get<RelationshipResponse>(environment.base_url +`/relationship/${id}`)
  }
}

import { Relationship } from './../model/relationship.model';
export interface RelationshipsResponse {
  error         : boolean,
  message       : string,
  length        : number,
  relationships : Relationship[]
}

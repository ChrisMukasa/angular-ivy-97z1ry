import { Relationship } from './../model/relationship.model';
export interface RelationshipResponse {
  error        : boolean,
  message      : string,
  relationship : Relationship
}

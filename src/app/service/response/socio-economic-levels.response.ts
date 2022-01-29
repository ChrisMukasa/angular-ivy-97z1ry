import { SocialEconomicLevel } from '../model/social-economic-level.model';
export interface SocialEconomicLevelsResponse {
  error: boolean,
  message: string,
  length: number,
  social_economic_levels: SocialEconomicLevel[]
}

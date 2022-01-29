import { SocialEconomicLevel } from '../model/social-economic-level.model';
export interface SocialEconomicLevelResponse {
  error: boolean,
  message: string,
  social_economic_level: SocialEconomicLevel
}

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AuthComponent } from './fragments/auth/auth.component';
import { AvenueComponent } from './fragments/localisation/avenue/avenue.component';
import { CityComponent } from './fragments/localisation/city/city.component';
import { CommuneComponent } from './fragments/localisation/commune/commune.component';
import { DashboardComponent } from './fragments/dashboard/dashboard.component';
import { DistrictComponent } from './fragments/localisation/district/district.component';
import { HealthCenterComponent } from './fragments/health-center/health-center.component';
import { HealthFactorComponent } from './fragments/health-factor/health-factor.component';
import { HealthZoneComponent } from './fragments/health-zone/health-zone.component';
import { HouseholdComponent } from './fragments/household/household.component';
import { LocalisationComponent } from './fragments/localisation/localisation.component';
import { MaritalStatusComponent } from './fragments/marital-status/marital-status.component';
import { MemberComponent } from './fragments/member/member.component';
import { NationalityComponent } from './fragments/nationality/nationality.component';
import { NgModule } from '@angular/core';
import { PrimaryPredictionComponent } from './fragments/primary-prediction/primary-prediction.component';
import { RelationshipComponent } from './fragments/relationship/relationship.component';
import { ReligionComponent } from './fragments/religion/religion.component';
import { RootNavComponent } from './root-nav/root-nav.component';
import { SchoolingComponent } from './fragments/schooling/schooling.component';
import { SettingComponent } from './fragments/setting/setting.component';
import { SocialEconomicLevelComponent } from './fragments/social-economic-level/social-economic-level.component';
import { WaterComponent } from './fragments/water/water.component';

const routes: Routes = [
  { path: ''                     , redirectTo: '/login', pathMatch: 'full' },
  { path: 'login'                , component: AuthComponent   },
  // { path: 'sign_up'              , component: SignupComponent  },
  { path: 'dashboard'            , component: DashboardComponent },
  { path: 'household'            , component: HouseholdComponent },
  { path: 'member'               , component: MemberComponent },
  { path: 'health_zone'          , component: HealthZoneComponent },
  { path: 'health_center'        , component: HealthCenterComponent },
  { path: 'localisation'         , component: LocalisationComponent },
  { path: 'city'                 , component: CityComponent },
  { path: 'commune'              , component: CommuneComponent },
  { path: 'district'             , component: DistrictComponent },
  { path: 'avenue'               , component: AvenueComponent },
  { path: 'nationality'          , component: NationalityComponent },
  { path: 'religion'             , component: ReligionComponent },
  { path: 'schooling'            , component: SchoolingComponent },
  { path: 'relationship'         , component: RelationshipComponent },
  { path: 'marital_status'       , component: MaritalStatusComponent },
  { path: 'water'                , component: WaterComponent },
  { path: 'health_factor'        , component: HealthFactorComponent },
  { path: 'primary_prediction'   , component: PrimaryPredictionComponent },
  { path: 'social_economic_level', component: SocialEconomicLevelComponent },
  { path: 'setting'              , component: SettingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

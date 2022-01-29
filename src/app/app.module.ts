import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown'
import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'
import { AuthComponent } from './fragments/auth/auth.component'
import { AvenueComponent } from './fragments/localisation/avenue/avenue.component'
import { AvenueCreateComponent } from './dialogs/avenue-create/avenue-create.component'
import { AvenueDeleteComponent } from './dialogs/avenue-delete/avenue-delete.component'
import { AvenueUpdateComponent } from './dialogs/avenue-update/avenue-update.component'
import { AvenueViewComponent } from './dialogs/avenue-view/avenue-view.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { BrowserModule } from '@angular/platform-browser'
import { CityComponent } from './fragments/localisation/city/city.component'
import { CityCreateComponent } from './dialogs/city-create/city-create.component'
import { CityDeleteComponent } from './dialogs/city-delete/city-delete.component'
import { CityUpdateComponent } from './dialogs/city-update/city-update.component'
import { CityViewComponent } from './dialogs/city-view/city-view.component'
import { CommonModule } from '@angular/common'
import { CommuneComponent } from './fragments/localisation/commune/commune.component'
import { CommuneCreateComponent } from './dialogs/commune-create/commune-create.component'
import { CommuneDeleteComponent } from './dialogs/commune-delete/commune-delete.component'
import { CommuneUpdateComponent } from './dialogs/commune-update/commune-update.component'
import { CommuneViewComponent } from './dialogs/commune-view/commune-view.component'
import { DashboardComponent } from './fragments/dashboard/dashboard.component'
import { DistrictComponent } from './fragments/localisation/district/district.component'
import { DistrictCreateComponent } from './dialogs/district-create/district-create.component'
import { DistrictDeleteComponent } from './dialogs/district-delete/district-delete.component'
import { DistrictUpdateComponent } from './dialogs/district-update/district-update.component'
import { DistrictViewComponent } from './dialogs/district-view/district-view.component'
import { HealthCenterComponent } from './fragments/health-center/health-center.component'
import { HealthCenterCreateComponent } from './dialogs/health-center-create/health-center-create.component'
import { HealthCenterDeleteComponent } from './dialogs/health-center-delete/health-center-delete.component'
import { HealthCenterUpdateComponent } from './dialogs/health-center-update/health-center-update.component'
import { HealthCenterViewComponent } from './dialogs/health-center-view/health-center-view.component'
import { HealthFactorComponent } from './fragments/health-factor/health-factor.component'
import { HealthFactorCreateComponent } from './dialogs/health-factor-create/health-factor-create.component'
import { HealthFactorDeleteComponent } from './dialogs/health-factor-delete/health-factor-delete.component'
import { HealthFactorUpdateComponent } from './dialogs/health-factor-update/health-factor-update.component'
import { HealthFactorViewComponent } from './dialogs/health-factor-view/health-factor-view.component'
import { HealthZoneComponent } from './fragments/health-zone/health-zone.component'
import { HealthZoneCreateComponent } from './dialogs/health-zone-create/health-zone-create.component'
import { HealthZoneDeleteComponent } from './dialogs/health-zone-delete/health-zone-delete.component'
import { HealthZoneUpdateComponent } from './dialogs/health-zone-update/health-zone-update.component'
import { HealthZoneViewComponent } from './dialogs/health-zone-view/health-zone-view.component'
import { HouseholdComponent } from './fragments/household/household.component'
import { HouseholdCreateComponent } from './dialogs/household-create/household-create.component'
import { HouseholdDeleteComponent } from './dialogs/household-delete/household-delete.component'
import { HouseholdUpdateComponent } from './dialogs/household-update/household-update.component'
import { HouseholdViewComponent } from './dialogs/household-view/household-view.component'
import { HttpClientModule } from '@angular/common/http'
import { LocalisationComponent } from './fragments/localisation/localisation.component'
import { MAT_DATE_LOCALE } from '@angular/material/core'
import { MaritalStatusComponent } from './fragments/marital-status/marital-status.component'
import { MaritalStatusCreateComponent } from './dialogs/marital-status-create/marital-status-create.component'
import { MaritalStatusDeleteComponent } from './dialogs/marital-status-delete/marital-status-delete.component'
import { MaritalStatusUpdateComponent } from './dialogs/marital-status-update/marital-status-update.component'
import { MaritalStatusViewComponent } from './dialogs/marital-status-view/marital-status-view.component'
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatDialogModule } from '@angular/material/dialog'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatIconModule } from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input'
import { MatMenuModule } from '@angular/material/menu'
import { MatMomentDateModule } from "@angular/material-moment-adapter"
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatProgressBarModule } from '@angular/material/progress-bar'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { MatRadioModule } from '@angular/material/radio'
import { MatSelectModule } from '@angular/material/select'
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { MatSortModule } from '@angular/material/sort'
import { MatTableModule } from '@angular/material/table'
import { MatTabsModule } from '@angular/material/tabs'
import { MemberComponent } from './fragments/member/member.component'
import { MemberCreateComponent } from './dialogs/member-create/member-create.component'
import { MemberDeleteComponent } from './dialogs/member-delete/member-delete.component'
import { MemberUpdateComponent } from './dialogs/member-update/member-update.component'
import { MemberViewComponent } from './dialogs/member-view/member-view.component'
import { NationalityComponent } from './fragments/nationality/nationality.component'
import { NationalityCreateComponent } from './dialogs/nationality-create/nationality-create.component'
import { NationalityDeleteComponent } from './dialogs/nationality-delete/nationality-delete.component'
import { NationalityUpdateComponent } from './dialogs/nationality-update/nationality-update.component'
import { NationalityViewComponent } from './dialogs/nationality-view/nationality-view.component'
import { PrimaryPredictionComponent } from './fragments/primary-prediction/primary-prediction.component'
import { PrimaryPredictionCreateComponent } from './dialogs/primary-prediction-create/primary-prediction-create.component'
import { PrimaryPredictionDeleteComponent } from './dialogs/primary-prediction-delete/primary-prediction-delete.component'
import { PrimaryPredictionUpdateComponent } from './dialogs/primary-prediction-update/primary-prediction-update.component'
import { PrimaryPredictionViewComponent } from './dialogs/primary-prediction-view/primary-prediction-view.component'
import { RelationshipComponent } from './fragments/relationship/relationship.component'
import { RelationshipCreateComponent } from './dialogs/relationship-create/relationship-create.component'
import { RelationshipDeleteComponent } from './dialogs/relationship-delete/relationship-delete.component'
import { RelationshipUpdateComponent } from './dialogs/relationship-update/relationship-update.component'
import { RelationshipViewComponent } from './dialogs/relationship-view/relationship-view.component'
import { ReligionComponent } from './fragments/religion/religion.component'
import { ReligionCreateComponent } from './dialogs/religion-create/religion-create.component'
import { ReligionDeleteComponent } from './dialogs/religion-delete/religion-delete.component'
import { ReligionUpdateComponent } from './dialogs/religion-update/religion-update.component'
import { ReligionViewComponent } from './dialogs/religion-view/religion-view.component'
import { RootNavComponent } from './root-nav/root-nav.component'
import { SchoolingComponent } from './fragments/schooling/schooling.component'
import { SchoolingCreateComponent } from './dialogs/schooling-create/schooling-create.component'
import { SchoolingDeleteComponent } from './dialogs/schooling-delete/schooling-delete.component'
import { SchoolingUpdateComponent } from './dialogs/schooling-update/schooling-update.component'
import { SchoolingViewComponent } from './dialogs/schooling-view/schooling-view.component'
import { SettingComponent } from './fragments/setting/setting.component'
import { SocialEconomicLevelComponent } from './fragments/social-economic-level/social-economic-level.component'
import { SocialEconomicLevelCreateComponent } from './dialogs/social-economic-level-create/social-economic-level-create.component'
import { SocialEconomicLevelDeleteComponent } from './dialogs/social-economic-level-delete/social-economic-level-delete.component'
import { SocialEconomicLevelUpdateComponent } from './dialogs/social-economic-level-update/social-economic-level-update.component'
import { SocialEconomicLevelViewComponent } from './dialogs/social-economic-level-view/social-economic-level-view.component'
import { WaterComponent } from './fragments/water/water.component'
import { WaterCreateComponent } from './dialogs/water-create/water-create.component'
import { WaterDeleteComponent } from './dialogs/water-delete/water-delete.component'
import { WaterUpdateComponent } from './dialogs/water-update/water-update.component'
import { WaterViewComponent } from './dialogs/water-view/water-view.component'

@NgModule({
  declarations: [
    AppComponent,
    RootNavComponent,
    DashboardComponent,
    HouseholdComponent,
    MemberComponent,
    HealthZoneComponent,
    HealthCenterComponent,
    HealthFactorComponent,
    NationalityComponent,
    ReligionComponent,
    RelationshipComponent,
    SchoolingComponent,
    MaritalStatusComponent,
    SocialEconomicLevelComponent,
    WaterComponent,
    PrimaryPredictionComponent,
    AuthComponent,
    CityComponent,
    CommuneComponent,
    DistrictComponent,
    AvenueComponent,
    MemberCreateComponent,
    MemberUpdateComponent,
    MemberViewComponent,
    MemberDeleteComponent,
    HouseholdCreateComponent,
    HouseholdUpdateComponent,
    HouseholdViewComponent,
    HouseholdDeleteComponent,
    LocalisationComponent,
    CityCreateComponent,
    CityUpdateComponent,
    CityViewComponent,
    CityDeleteComponent,
    CommuneViewComponent,
    CommuneDeleteComponent,
    CommuneCreateComponent,
    CommuneUpdateComponent,
    DistrictViewComponent,
    DistrictDeleteComponent,
    DistrictCreateComponent,
    DistrictUpdateComponent,
    AvenueViewComponent,
    AvenueDeleteComponent,
    AvenueCreateComponent,
    AvenueUpdateComponent,
    HealthZoneCreateComponent,
    HealthZoneUpdateComponent,
    HealthZoneDeleteComponent,
    HealthZoneViewComponent,
    HealthCenterUpdateComponent,
    HealthCenterDeleteComponent,
    HealthCenterViewComponent,
    HealthCenterCreateComponent,
    NationalityCreateComponent,
    NationalityUpdateComponent,
    NationalityDeleteComponent,
    NationalityViewComponent,
    ReligionCreateComponent,
    ReligionUpdateComponent,
    ReligionDeleteComponent,
    ReligionViewComponent,
    SchoolingCreateComponent,
    SchoolingUpdateComponent,
    SchoolingDeleteComponent,
    SchoolingViewComponent,
    RelationshipCreateComponent,
    RelationshipUpdateComponent,
    RelationshipDeleteComponent,
    RelationshipViewComponent,
    MaritalStatusCreateComponent,
    MaritalStatusUpdateComponent,
    MaritalStatusDeleteComponent,
    MaritalStatusViewComponent,
    WaterCreateComponent,
    WaterUpdateComponent,
    WaterDeleteComponent,
    WaterViewComponent,
    HealthFactorCreateComponent,
    HealthFactorUpdateComponent,
    HealthFactorDeleteComponent,
    HealthFactorViewComponent,
    PrimaryPredictionCreateComponent,
    PrimaryPredictionUpdateComponent,
    PrimaryPredictionDeleteComponent,
    PrimaryPredictionViewComponent,
    SocialEconomicLevelCreateComponent,
    SocialEconomicLevelUpdateComponent,
    SocialEconomicLevelDeleteComponent,
    SocialEconomicLevelViewComponent,
    SettingComponent
  ],
  imports: [
    CommonModule,
    AngularMultiSelectModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatTableModule,
    MatTabsModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatMomentDateModule,
    MatSortModule,
    MatMenuModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    HttpClientModule,
    MatDialogModule,
    MatCheckboxModule,
    MatRadioModule,
    MatProgressBarModule
  ],
  providers: [
    { provide: MAT_DATE_LOCALE , useValue: 'fr-FR'}
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

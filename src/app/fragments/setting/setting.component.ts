import { Member } from 'src/app/service/model/member.model'
import { HealthZone } from './../../service/model/health-zone.model'
import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ToastService, ToastStyle } from 'src/app/ng-material/toast.service'

import { City } from 'src/app/service/model/city.model'
import { CityService } from 'src/app/service/city.service'
import { Commune } from 'src/app/service/model/commune.model'
import { CommuneService } from 'src/app/service/commune.service'
import { District } from 'src/app/service/model/district.model'
import { DistrictService } from 'src/app/service/district.service'
import { ExcelService } from 'src/app/service/exports/excel.service'
import { HealthCenter } from 'src/app/service/model/health-center.model'
import { HealthFactor } from 'src/app/service/model/health-factor.model'
import { Household } from 'src/app/service/model/household.model'
import { MaritalStatus } from 'src/app/service/model/marital-status.model'
import { Nationality } from 'src/app/service/model/nationality.model'
import { PrimaryPrediction } from 'src/app/service/model/primary-prediction.model'
import { Relationship } from 'src/app/service/model/relationship.model'
import { Religion } from 'src/app/service/model/religion.model'
import { Schooling } from 'src/app/service/model/schooling.model'
import { SocialEconomicLevel } from 'src/app/service/model/social-economic-level.model'
import { User } from 'src/app/service/model/user.model'
import { Water } from 'src/app/service/model/water.model'
import { HealthCenterService } from 'src/app/service/health-center.service'
import { HealthZoneService } from 'src/app/service/health-zone.service'
import { HouseholdService } from 'src/app/service/household.service'
import { MaritalStatusService } from 'src/app/service/marital-status.service'
import { MemberService } from 'src/app/service/member.service'
import { PrimaryPredictionService } from 'src/app/service/primary-prediction.service'
import { SocialEconomicLevelService } from 'src/app/service/social-economic-level.service'
import { WaterService } from 'src/app/service/water.service'
import { ReligionService } from 'src/app/service/religion.service'
import { SchoolingService } from 'src/app/service/schooling.service'
import { UserService } from 'src/app/service/user.service'
import { AvenueService } from 'src/app/service/avenue.service'
import { HealthFactorService } from 'src/app/service/health-factor.service'
import { Avenue } from 'src/app/service/model/avenue.model'
import { NationalityService } from 'src/app/service/nationality.service'
import { RelationshipService } from 'src/app/service/relationship.service'

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {

  form !: FormGroup

  formats = [
    { id: 'xlsx', designation: 'EXCEL (.xlsx)' },
    { id: 'csv' , designation: 'CSV   (.csv)'  },
    { id: 'json', designation: 'JSON  (.json)' },
  ]

  selected_format = 'xlsx'

  tables = [
    { id: 'all'                   , designation: 'TOUTES LES DONNEES' },
    { id: 'v_city'                , designation: 'VILLE' },
    { id: 'v_commune'             , designation: 'COMMUNE' },
    { id: 'v_district'            , designation: 'QUARTIER' },
    { id: 'v_avenue'              , designation: 'AVENUE' },
    { id: 'v_health_center'       , designation: 'CENTRE DE CENTE' },
    { id: 'v_health_factor'       , designation: 'FACTEUR SANITAIRE' },
    { id: 'v_health_zone'         , designation: 'ZONE DE SANTE' },
    { id: 'v_household'           , designation: 'MENAGE' },
    { id: 'v_marital_status'      , designation: 'ETAT CIVIL' },
    { id: 'v_member'              , designation: 'MEMBRE' },
    { id: 'v_nationality'         , designation: 'NATIONALITE' },
    { id: 'v_primary_predictor'   , designation: 'PREDICTION PRIMAIRE' },
    { id: 'v_relationship'        , designation: 'LIEN DE PARENTE' },
    { id: 'v_religion'            , designation: 'RELIGION' },
    { id: 'v_schooling'           , designation: 'SCOLARITE' },
    { id: 'v_socio_economic_level', designation: 'NIVEAU SOCIO-ECONOMIQUE' },
    { id: 'v_water'               , designation: 'EAU POTABLE' },
    { id: 'v_user'                , designation: 'UTILISATEUR' }
  ]

  selected_table = 'all'

  cities                : City               [] = []
  communes              : Commune            [] = []
  districts             : District           [] = []
  avenues               : Avenue             [] = []
  health_centers        : HealthCenter       [] = []
  health_factors        : HealthFactor       [] = []
  health_zones          : HealthZone         [] = []
  households            : Household          [] = []
  marital_status        : MaritalStatus      [] = []
  members               : Member             [] = []
  nationalities         : Nationality        [] = []
  primary_predictions   : PrimaryPrediction  [] = []
  relationships         : Relationship       [] = []
  religions             : Religion           [] = []
  schoolings            : Schooling          [] = []
  social_economic_levels: SocialEconomicLevel[] = []
  waters                : Water              [] = []
  users                 : User               [] = []

  constructor(
    private citySevice               : CityService,
    private communeSevice            : CommuneService,
    private districtSevice           : DistrictService,
    private avenueSevice             : AvenueService,
    private healthCenterSevice       : HealthCenterService,
    private healthFactorSevice       : HealthFactorService,
    private healthZoneSevice         : HealthZoneService,
    private householdSevice          : HouseholdService,
    private maritalStatusSevice      : MaritalStatusService,
    private memberSevice             : MemberService,
    private nationalitySevice        : NationalityService,
    private primaryPredictionSevice  : PrimaryPredictionService,
    private relationshipSevice       : RelationshipService,
    private religionSevice           : ReligionService,
    private schoolingSevice          : SchoolingService,
    private socialEconomicLevelSevice: SocialEconomicLevelService,
    private waterSevice              : WaterService,
    private userSevice               : UserService,
    private excelService             : ExcelService,
    private builder                  : FormBuilder,
    private toast                    : ToastService) {}

  ngOnInit(): void {
    this.form = this.builder.group({
      format: [this.selected_format, [Validators.required]],
      table : [this.selected_table , [Validators.required]]
    })
  }

  createBackup(){
    this.toast.custom('uil uil-cloud' ,'Backup', 'BACKUP IN PROGRESS...', ToastStyle.warning)
  }

  createExportExcel(){
    console.table(this.form.value)
    switch (this.form.value.table) {
      case 'v_city':
        this.getCity()
        break
      case 'v_commune':
        this.getCommune()
        break
      case 'v_district':
        this.getDistrict()
        break
      case 'v_avenue':
        this.getAvenue()
        break
      case 'v_health_center':
        this.getHealthCenter()
        break
      case 'v_health_factor':
        this.getHealthFactor()
        break
      case 'v_health_zone':
        this.getHealthZone()
        break
      case 'v_household':
        this.getHousehold()
        break
      case 'v_marital_status':
        this.getMaritalStatus()
        break
      case 'v_member':
        this.getMember()
        break
      case 'v_nationality':
        this.getNationality()
        break
      case 'v_primary_predictor':
        this.getPrimaryPrediction()
        break
      case 'v_relationship':
        this.getRelationship()
        break
      case 'v_religion':
        this.getReligion()
        break
      case 'v_schooling':
        this.getSchooling()
        break
      case 'v_socio_economic_level':
        this.getSocialEconomicLevel()
        break
      case 'v_water':
        this.getWater()
        break
      case 'v_user':
        this.getWater()
        break
      default:
        break
    }
  }



  getCity(){
    this.citySevice.get().subscribe(response => {
      this.cities = response.cities
      if(this.cities.length > 0) {
        this.toast.custom('uil uil-sync' ,'Exportation', 'Exportation en cours, veillez patienter ...', ToastStyle.message)
        this.makeExportation(this.form.value.format, this.cities, 'villes')
      } else {
        this.toast.custom('uil uil-bell' ,'Erreur', "Une erreur est survenue lors de l'exportation", ToastStyle.warning)
      }
    })
  }

  getCommune(){
    this.communeSevice.get().subscribe(response => {
      this.communes = response.communes
      if(this.communes.length > 0) {
        this.toast.custom('uil uil-bell' ,'Exportation', 'Exportation en cours, veillez patienter ...', ToastStyle.message)
        this.makeExportation(this.form.value.format, this.communes, 'communes')
      } else {
        this.toast.custom('uil uil-bell' ,'Erreur', "Une erreur est survenue lors de l'exportation", ToastStyle.warning)
      }
    })
  }

  getDistrict(){
    this.districtSevice.get().subscribe(response => {
      this.districts = response.districts
      if(this.districts.length > 0) {
        this.toast.custom('uil uil-bell' ,'Exportation', 'Exportation en cours, veillez patienter ...', ToastStyle.message)
        this.makeExportation(this.form.value.format, this.districts, 'quartiers')
      } else {
        this.toast.custom('uil uil-bell' ,'Erreur', "Une erreur est survenue lors de l'exportation", ToastStyle.warning)
      }
    })
  }

  getAvenue(){
    this.avenueSevice.get().subscribe(response => {
      this.avenues = response.avenues
      if(this.avenues.length > 0) {
        this.toast.custom('uil uil-sync' ,'Exportation', 'Exportation en cours, veillez patienter ...', ToastStyle.message)
        this.makeExportation(this.form.value.format, this.avenues, 'avenues')
      } else {
        this.toast.custom('uil uil-bell' ,'Erreur', "Une erreur est survenue lors de l'exportation", ToastStyle.warning)
      }
    })
  }

  getHealthCenter(){
    this.healthCenterSevice.get().subscribe(response => {
      this.health_centers = response.health_centers
      if(this.health_centers.length > 0) {
        this.toast.custom('uil uil-sync' ,'Exportation', 'Exportation en cours, veillez patienter ...', ToastStyle.message)
        this.makeExportation(this.form.value.format, this.health_centers, 'Centre_de_sante')
      } else {
        this.toast.custom('uil uil-bell' ,'Erreur', "Une erreur est survenue lors de l'exportation", ToastStyle.warning)
      }
    })
  }

  getHealthFactor(){
    this.healthFactorSevice.get().subscribe(response => {
      this.health_factors = response.health_factors
      if(this.health_factors.length > 0) {
        this.toast.custom('uil uil-sync' ,'Exportation', 'Exportation en cours, veillez patienter ...', ToastStyle.message)
        this.makeExportation(this.form.value.format, this.health_factors, 'Facteurs_sanitaire')
      } else {
        this.toast.custom('uil uil-bell' ,'Erreur', "Une erreur est survenue lors de l'exportation", ToastStyle.warning)
      }
    })
  }

  getHealthZone(){
    this.healthZoneSevice.get().subscribe(response => {
      this.health_zones = response.health_zones
      if(this.health_zones.length > 0) {
        this.toast.custom('uil uil-sync' ,'Exportation', 'Exportation en cours, veillez patienter ...', ToastStyle.message)
        this.makeExportation(this.form.value.format, this.health_zones, 'Zones_de_sante')
      } else {
        this.toast.custom('uil uil-bell' ,'Erreur', "Une erreur est survenue lors de l'exportation", ToastStyle.warning)
      }
    })
  }

  getHousehold(){
    this.householdSevice.get().subscribe(response => {
      this.households = response.households
      if(this.households.length > 0) {
        this.toast.custom('uil uil-sync' ,'Exportation', 'Exportation en cours, veillez patienter ...', ToastStyle.message)
        this.makeExportation(this.form.value.format, this.households, 'Menages')
      } else {
        this.toast.custom('uil uil-bell' ,'Erreur', "Une erreur est survenue lors de l'exportation", ToastStyle.warning)
      }
    })
  }

  getMaritalStatus(){
    this.maritalStatusSevice.get().subscribe(response => {
      this.marital_status = response.marital_status
      if(this.marital_status.length > 0) {
        this.toast.custom('uil uil-sync' ,'Exportation', 'Exportation en cours, veillez patienter ...', ToastStyle.message)
        this.makeExportation(this.form.value.format, this.marital_status, 'Etat_civil')
      } else {
        this.toast.custom('uil uil-bell' ,'Erreur', "Une erreur est survenue lors de l'exportation", ToastStyle.warning)
      }
    })
  }

  getMember(){
    this.memberSevice.get().subscribe(response => {
      this.members = response.members
      if(this.members.length > 0) {
        this.toast.custom('uil uil-sync' ,'Exportation', 'Exportation en cours, veillez patienter ...', ToastStyle.message)
        this.makeExportation(this.form.value.format, this.members, 'Membres')
      } else {
        this.toast.custom('uil uil-bell' ,'Erreur', "Une erreur est survenue lors de l'exportation", ToastStyle.warning)
      }
    })
  }

  getNationality(){
    this.nationalitySevice.get().subscribe(response => {
      this.nationalities = response.nationalities
      if(this.nationalities.length > 0) {
        this.toast.custom('uil uil-sync' ,'Exportation', 'Exportation en cours, veillez patienter ...', ToastStyle.message)
        this.makeExportation(this.form.value.format, this.nationalities, 'Nationalites')
      } else {
        this.toast.custom('uil uil-bell' ,'Erreur', "Une erreur est survenue lors de l'exportation", ToastStyle.warning)
      }
    })
  }

  getPrimaryPrediction(){
    this.primaryPredictionSevice.get().subscribe(response => {
      this.primary_predictions = response.primary_predictions
      if(this.primary_predictions.length > 0) {
        this.toast.custom('uil uil-sync' ,'Exportation', 'Exportation en cours, veillez patienter ...', ToastStyle.message)
        this.makeExportation(this.form.value.format, this.primary_predictions, 'Facteur_de_prevention_primaire')
      } else {
        this.toast.custom('uil uil-bell' ,'Erreur', "Une erreur est survenue lors de l'exportation", ToastStyle.warning)
      }
    })
  }

  getRelationship(){
    this.relationshipSevice.get().subscribe(response => {
      this.relationships = response.relationships
      if(this.relationships.length > 0) {
        this.toast.custom('uil uil-sync' ,'Exportation', 'Exportation en cours, veillez patienter ...', ToastStyle.message)
        this.makeExportation(this.form.value.format, this.relationships, 'Lien_parental')
      } else {
        this.toast.custom('uil uil-bell' ,'Erreur', "Une erreur est survenue lors de l'exportation", ToastStyle.warning)
      }
    })
  }

  getReligion(){
    this.religionSevice.get().subscribe(response => {
      this.religions = response.religions
      if(this.religions.length > 0) {
        this.toast.custom('uil uil-sync' ,'Exportation', 'Exportation en cours, veillez patienter ...', ToastStyle.message)
        this.makeExportation(this.form.value.format, this.religions, 'Religion')
      } else {
        this.toast.custom('uil uil-bell' ,'Erreur', "Une erreur est survenue lors de l'exportation", ToastStyle.warning)
      }
    })
  }

  getSchooling(){
    this.schoolingSevice.get().subscribe(response => {
      this.schoolings = response.schoolings
      if(this.schoolings.length > 0) {
        this.toast.custom('uil uil-sync' ,'Exportation', 'Exportation en cours, veillez patienter ...', ToastStyle.message)
        this.makeExportation(this.form.value.format, this.schoolings, 'Scolarite')
      } else {
        this.toast.custom('uil uil-bell' ,'Erreur', "Une erreur est survenue lors de l'exportation", ToastStyle.warning)
      }
    })
  }

  getSocialEconomicLevel(){
    this.socialEconomicLevelSevice.get().subscribe(response => {
      this.social_economic_levels = response.social_economic_levels
      if(this.social_economic_levels.length > 0) {
        this.toast.custom('uil uil-sync' ,'Exportation', 'Exportation en cours, veillez patienter ...', ToastStyle.message)
        this.makeExportation(this.form.value.format, this.social_economic_levels, 'Etat_civil')
      } else {
        this.toast.custom('uil uil-bell' ,'Erreur', "Une erreur est survenue lors de l'exportation", ToastStyle.warning)
      }
    })
  }

  getWater(){
    this.waterSevice.get().subscribe(response => {
      this.waters = response.waters
      if(this.waters.length > 0) {
        this.toast.custom('uil uil-sync' ,'Exportation', 'Exportation en cours, veillez patienter ...', ToastStyle.message)
        this.makeExportation(this.form.value.format, this.waters, 'eau_potable')
      } else {
        this.toast.custom('uil uil-bell' ,'Erreur', "Une erreur est survenue lors de l'exportation", ToastStyle.warning)
      }
    })
  }

  getUser(){
    this.userSevice.get().subscribe(response => {
      this.users = response.users
      if(this.users.length > 0) {
        this.toast.custom('uil uil-sync' ,'Exportation', 'Exportation en cours, veillez patienter ...', ToastStyle.message)
        this.makeExportation(this.form.value.format, this.users, 'utilisateurs')
      } else {
        this.toast.custom('uil uil-bell' ,'Erreur', "Une erreur est survenue lors de l'exportation", ToastStyle.warning)
      }
    })
  }



  makeExportation(type :string, json: any[], title :string){
    switch (type) {
      case 'xlsx':
        this.excelService.toEXCEL(json, title)
        break
      case 'csv':
        this.excelService.toCSV(json, title)
        break
      case 'json':
        this.excelService.toJSON(json, title)
        break
      default:
        this.excelService.toEXCEL(json, title)
        break
    }
  }
}

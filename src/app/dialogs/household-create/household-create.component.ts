import { Component, Inject, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Observable, of } from 'rxjs'
import { Avenue } from 'src/app/service/model/avenue.model'
import { AvenueService } from 'src/app/service/avenue.service'
import { City } from 'src/app/service/model/city.model'
import { CityService } from 'src/app/service/city.service'
import { Commune } from 'src/app/service/model/commune.model'
import { CommuneService } from 'src/app/service/commune.service'
import { District } from 'src/app/service/model/district.model'
import { DistrictService } from 'src/app/service/district.service'
import { HealthCenter } from './../../service/model/health-center.model'
import { HealthCenterService } from 'src/app/service/health-center.service'
import { HealthZone } from 'src/app/service/model/health-zone.model'
import { HealthZoneService } from 'src/app/service/health-zone.service'
import { HouseholdService } from 'src/app/service/household.service'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { ToastService } from 'src/app/ng-material/toast.service'
import { Household } from 'src/app/service/model/household.model'

@Component({
  selector: 'app-household-create',
  templateUrl: './household-create.component.html',
  styleUrls: ['./household-create.component.css']
})
export class HouseholdCreateComponent implements OnInit {

  form      !: FormGroup
  hide = true
  hideRetry = true
  error = false

  households: Household[] = []

  health_zones: HealthZone[] = []
  health_centers: HealthCenter[] = []
  cities: City[] = []
  communes: Commune[] = []
  districts: District[] = []
  avenues: Avenue[] = []

  health_zone   !: string
  health_center !: string
  citie         !: string
  commune       !: string
  district      !: string
  avenue        !: string

  id_health_zone   !: number
  id_health_center !: number
  id_city          !: number
  id_commune       !: number
  id_district      !: number
  id_avenue        !: number

  longitude !: string
  latitude  !: string
  number    !: string

  states = [
    { designation: 'VISIBLE' },
    { designation: 'INVISIBLE' },
  ]

  state = 'VISIBLE'

  constructor(
    public service: HouseholdService,
    public serviceHealthZone: HealthZoneService,
    public serviceHealthCenter: HealthCenterService,
    public serviceCity: CityService,
    public serviceCommune: CommuneService,
    public serviceDistrict: DistrictService,
    public serviceAvenue: AvenueService,
    private builder: FormBuilder,
    private toast: ToastService,
    public dialogRef: MatDialogRef<HouseholdCreateComponent>,
    @Inject(MAT_DIALOG_DATA) data: any) {
    this.households = data
  }

  ngOnInit(): void {
    this.getHealthZone()
    this.getHealthCenter()
    this.getCity()
    this.getCommune()
    this.getDistrict()
    this.getAvenue()

    this.form = this.builder.group({
      id_health_zone: [this.id_health_zone, Validators.required],
      id_health_center: [this.id_health_center, Validators.required],
      id_city: [this.id_city, Validators.required],
      id_commune: [this.id_commune, Validators.required],
      id_district: [this.id_district, Validators.required],
      id_avenue: [this.id_avenue, Validators.required],
      longitude: [this.longitude, [Validators.required, Validators.max(20)]],
      latitude: [this.latitude, [Validators.required, Validators.max(20)]],
      number: [this.number, Validators.required],
      state: [this.state, Validators.required]
    })
  }

  create() {
    // console.log(this.form.value)

    var result = this.getHouseholdId(1)
    console.log('RESULT 1 ==============> ' + result)
    if (result != 'empty') {
      this.delay(4000).then(() => {
        console.log('Waiting fo saving')
        console.log('RESULT 2 ==============> ' + result)
        this.service.create(result, this.form.value).subscribe((response) => {
          this.toast.show(response)
          this.close()
        })
      })
    } else {
      alert('ERROR ===> ' + result)
    }
  }

  getHealthZone() {
    this.serviceHealthZone.get().subscribe(response => {
      this.health_zones = response.health_zones
    })
  }

  getHealthZoneById(id: number) {
    this.serviceHealthZone.getById(id).subscribe(response => {
      this.health_zone = response.health_zone.designation
    })
  }

  getHealthCenter() {
    this.serviceHealthCenter.get().subscribe(response => {
      this.health_centers = response.health_centers
    })
  }

  getHealthCenterById(id: number) {
    this.serviceHealthCenter.getById(id).subscribe(response => {
      this.health_center = response.health_center.designation
    })
  }

  getCity() {
    this.serviceCity.get().subscribe(response => this.cities = response.cities)
  }

  getCommune() {
    this.serviceCommune.get().subscribe(response => this.communes = response.communes)
  }

  getDistrict() {
    this.serviceDistrict.get().subscribe(response => this.districts = response.districts)
  }

  getDistrictById(id: number) {
    this.serviceDistrict.getById(id).subscribe(response => {
      this.district = response.district.designation
    })
  }

  getAvenue() {
    this.serviceAvenue.get().subscribe(response => {
      this.avenues = response.avenues
    })
  }

  getAvenueById(id: number) {
    this.serviceAvenue.getById(id).subscribe(response => {
      this.avenue = response.avenue.designation
    })
  }

  close() {
    this.dialogRef.close(this.form.value)
  }

  getHouseholdId(userId: number): any {
    console.log('Begin')
    this.getHealthZoneById(this.form.value.id_health_zone)
    this.getHealthCenterById(this.form.value.id_health_center)
    this.getDistrictById(this.form.value.id_district)
    this.getAvenueById(this.form.value.id_avenue);

    this.delay(1500).then(() => {
      console.log('End Get')
      console.log('After Id')
      var prefix = this.health_zone.toString().substring(0, 2) + this.health_center.toString().substring(0, 2) + this.district.toString().substring(0, 2) + this.avenue.toString().substring(0, 2)
      var uuid

      console.log('Prefix ==> ' + prefix)
      var result = this.service.getLastHousehold(prefix, this.households)
      console.log('RESULT ==> ' + result);

      if (result.length == 0) {
        uuid = prefix + '1.L' + userId

        return uuid
      } else {
        var suffix = this.findMax(result)
        var _id = suffix + 1
        uuid = prefix + _id + '.L' + userId

        console.log('PREFIX     ===> ' + prefix)
        console.log('SUFFIX     ===> ' + suffix)
        console.log('SUFFIX + 1 ===> ' + _id)
        console.log('FINAL ID   ===> ' + uuid)

        return uuid
      }
    });
  }

  async delay(ms: number) {
    await new Promise<void>(resolve => setTimeout(() => resolve(), ms)).then(() => console.log("fired"));
  }

  findMax(numbers: number[]): number {
    return Math.max(...numbers);
  }
}

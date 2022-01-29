import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Avenue } from 'src/app/service/model/avenue.model';
import { AvenueService } from 'src/app/service/avenue.service';
import { City } from 'src/app/service/model/city.model';
import { CityService } from 'src/app/service/city.service';
import { Commune } from 'src/app/service/model/commune.model';
import { CommuneService } from 'src/app/service/commune.service';
import { District } from 'src/app/service/model/district.model';
import { DistrictService } from 'src/app/service/district.service';
import { HealthCenter } from 'src/app/service/model/health-center.model';
import { HealthCenterService } from 'src/app/service/health-center.service';
import { HealthZone } from 'src/app/service/model/health-zone.model';
import { HealthZoneService } from 'src/app/service/health-zone.service';
import { HouseholdCreateComponent } from '../household-create/household-create.component';
import { HouseholdService } from 'src/app/service/household.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastService } from 'src/app/ng-material/toast.service';

@Component({
  selector: 'app-household-update',
  templateUrl: './household-update.component.html',
  styleUrls: ['./household-update.component.css']
})
export class HouseholdUpdateComponent implements OnInit {

  form      !: FormGroup;


  health_zones: HealthZone[] = []
  health_centers: HealthCenter[] = []
  cities: City[] = []
  communes: Commune[] = []
  districts: District[] = []
  avenues: Avenue[] = []

  id               !: number
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
    this.id = data.id
    this.id_health_zone = data.id_health_zone
    this.id_health_center = data.id_health_center
    this.id_city = data.id_city
    this.id_commune = data.id_commune
    this.id_district = data.id_district
    this.id_avenue = data.id_avenue
    this.longitude = data.longitude
    this.latitude = data.latitude
    this.state = data.state
    this.number = data.number
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
    });
  }

  update() {
    console.log(this.form.value);
    this.service.update(this.id, this.form.value).subscribe((response) => {
      this.toast.show(response)
      this.close();
    })
  }

  getHealthZone() {
    this.serviceHealthZone.get().subscribe(response => {
      this.health_zones = response.health_zones
    })
  }

  getHealthCenter() {
    this.serviceHealthCenter.get().subscribe(response => {
      this.health_centers = response.health_centers
    })
  }

  getCity() {
    this.serviceCity.get().subscribe(response => {
      this.cities = response.cities
    })
  }

  getCommune() {
    this.serviceCommune.get().subscribe(response => {
      this.communes = response.communes
    })
  }

  getDistrict() {
    this.serviceDistrict.get().subscribe(response => {
      this.districts = response.districts
    })
  }

  getAvenue() {
    this.serviceAvenue.get().subscribe(response => {
      this.avenues = response.avenues
    })
  }

  close() {
    this.dialogRef.close(this.form.value);
  }
}

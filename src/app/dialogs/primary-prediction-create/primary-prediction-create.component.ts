import {
  Component,
  OnInit,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Household } from 'src/app/service/model/household.model';
import { HouseholdService } from 'src/app/service/household.service';
import { MatDialogRef } from '@angular/material/dialog';
import { Nationality } from 'src/app/service/model/nationality.model';
import { NationalityService } from 'src/app/service/nationality.service';
import { PrimaryPredictionService } from 'src/app/service/primary-prediction.service';
import { Religion } from 'src/app/service/model/religion.model';
import { ReligionService } from 'src/app/service/religion.service';
import { ToastService } from 'src/app/ng-material/toast.service';
import { Water } from 'src/app/service/model/water.model';
import { WaterService } from 'src/app/service/water.service';

@Component({
  selector: 'app-primary-prediction-create',
  templateUrl: './primary-prediction-create.component.html',
  styleUrls: ['./primary-prediction-create.component.css'],

})
export class PrimaryPredictionCreateComponent implements OnInit {
  form          !: FormGroup;

  households: Household[] = []
  waters: Water[] = []
  religions: Religion[] = []
  nationalities: Nationality[] = []

  id_household  !: string
  id_water      !: number
  id_religion   !: number
  id_nationality = 1

  light_petrol = false;
  light_sun = false;
  light_public = false;
  other_eletrcicity = '-'

  toilet_inside = false;
  toilet_outside = false;
  other_toilet = '-'

  french = false;
  english = false;
  kiswahili = false;
  lingala = false;

  mosquito_net_number     !: number
  mosquito_net_used_number!: number
  mosquito_net_state_used !: number

  hygiene_habitats = [
    { designation: 'TRES BONNE' },
    { designation: 'BONNE' },
    { designation: 'MOYENNE' },
    { designation: 'MAUVAISE' },
    { designation: 'MEDIOCRE' }
  ]

  hygiene_habitat       !: string
  other_hygiene_habitat !: string
  other                 !: string

  constructor(
    public service: PrimaryPredictionService,
    public serviceHousehold: HouseholdService,
    public serviceWater: WaterService,
    public serviceReligion: ReligionService,
    public serviceNationality: NationalityService,
    private builder: FormBuilder,
    private toast: ToastService,
    public dialogRef: MatDialogRef<PrimaryPredictionCreateComponent>
  ) { }

  ngOnInit(): void {
    this.getHousehold()
    this.getWater()
    this.getReligion()
    this.getNationality()

    this.form = this.builder.group({
      id_household: [this.id_household, Validators.required],
      id_water: [this.id_water, Validators.required],
      id_religion: [this.id_religion, Validators.required],
      id_nationality: [this.id_nationality, Validators.required],
      light_petrol: [this.light_petrol],
      light_sun: [this.light_sun],
      light_public: [this.light_public],
      other_light: [this.other_eletrcicity, Validators.required],
      toilet_inside: [this.toilet_inside],
      toilet_outside: [this.toilet_outside],
      other_toilet: [this.other_toilet, [Validators.required, Validators.max(255)]],
      mosquito_net_number: [this.mosquito_net_number, Validators.required],
      mosquito_net_used_number: [this.mosquito_net_used_number, Validators.required],
      french: [this.french],
      english: [this.english],
      kiswahili: [this.kiswahili],
      lingala: [this.lingala],
      other_eletrcicity: [this.other_eletrcicity, [Validators.required, Validators.max(255)]],
      other_hygiene_habitat: [this.other_hygiene_habitat, [Validators.required, Validators.max(255)]],
      other: [this.other, [Validators.required, Validators.max(255)]],
      hygiene_habitat: [this.hygiene_habitat, Validators.required],
    });
  }
  //Light
  toggle_check_light_petrol(event: any) {
    this.light_petrol = event
  }

  toggle_check_light_public(event: any) {
    this.light_public = event
  }

  toggle_check_light_sun(event: any) {
    this.light_sun = event
  }

  toggle_check_light_other(event: any) {
    this.other_eletrcicity = event
  }
  //Toilet
  toggle_toilet_in(event: any) {
    this.toilet_inside = event
  }

  toggle_toilet_out(event: any) {
    this.toilet_inside = event
  }

  toggle_toilet_oth(event: any) {
    this.other_toilet = event
  }

  //Language
  toggle_language_french(event: any) {
    this.french = event
  }

  toggle_language_english(event: any) {
    this.english = event
  }

  toggle_language_kiswahili(event: any) {
    this.kiswahili = event
  }

  toggle_language_lingala(event: any) {
    this.lingala = event
  }

  create() {
    this.service.create(this.form.value).subscribe((response) => {
      this.toast.show(response)
      this.close();
    })
  }

  getHousehold() {
    this.serviceHousehold.get().subscribe(response => {
      this.households = response.households
    })
  }

  getWater() {
    this.serviceWater.get().subscribe(response => {
      this.waters = response.waters
    })
  }

  getReligion() {
    this.serviceReligion.get().subscribe(response => {
      this.religions = response.religions
    })
  }

  getNationality() {
    this.serviceNationality.get().subscribe(response => {
      this.nationalities = response.nationalities
    })
  }

  close() {
    this.dialogRef.close(this.form.value);
  }
}

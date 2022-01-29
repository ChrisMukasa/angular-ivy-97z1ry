import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Household } from 'src/app/service/model/household.model';
import { HouseholdService } from 'src/app/service/household.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PrimaryPredictionCreateComponent } from '../primary-prediction-create/primary-prediction-create.component';
import { SocialEconomicLevelService } from 'src/app/service/social-economic-level.service';
import { ToastService } from 'src/app/ng-material/toast.service';

@Component({
  selector: 'app-social-economic-level-update',
  templateUrl: './social-economic-level-update.component.html',
  styleUrls: ['./social-economic-level-update.component.css']
})
export class SocialEconomicLevelUpdateComponent implements OnInit {

  form         !: FormGroup
  households: Household[] = []

  id           !: number
  id_household !: string

  profession_head_of_household !: string
  other_profession             !: string
  usual_source_of_income       !: string

  proprio_locations = [
    { designation: 'PROPRIETAIRE' },
    { designation: 'LOCATAIRE' },
    { designation: 'LOGÉ' }
  ]

  selected_proprio_location = 'PROPRIETAIRE'

  rent_amount       !: number
  number_habitation !: number
  number_of_member  !: number
  bedroom           !: number
  other_factor      !: string

  capacity_costs = [
    { designation: 'BONNE' },
    { designation: 'MOYENNE' },
    { designation: 'ALEATOIRE' },
    { designation: 'FAIBLE' },
    { designation: 'AUCUNE' }
  ]

  selected_capacity_cost = 'MOYENNE'

  capacity_payment_types = [
    { designation: 'CHEF DE MENAGE' },
    { designation: 'FAMILIERS' },
    { designation: 'EGLISE' },
    { designation: 'ASSOCIATION' },
    { designation: 'MUTUELLE' },
    { designation: 'AUTRES' }
  ]

  selected_payment_type = 'CHEF DE MENAGE'

  other_info !: string

  constructor(
    public service: SocialEconomicLevelService,
    public serviceHousehold: HouseholdService,
    private builder: FormBuilder,
    private toast: ToastService,
    public dialogRef: MatDialogRef<PrimaryPredictionCreateComponent>,
    @Inject(MAT_DIALOG_DATA) data: any) {
    this.id = data.id
    this.id_household = data.id_household
    this.profession_head_of_household = data.profession_head_of_household
    this.other_profession = data.other_profession
    this.usual_source_of_income = data.usual_source_of_income
    this.selected_proprio_location = data.proprio_location
    this.rent_amount = data.rent_amount
    this.number_habitation = data.number_habitation
    this.number_of_member = data.number_of_member
    this.bedroom = data.bedroom
    this.other_factor = data.other_factor
    this.selected_capacity_cost = data.capacity_cost
    this.selected_payment_type = data.payment_type
    this.other_info = data.other_info
  }

  ngOnInit(): void {
    this.getHousehold()

    this.form = this.builder.group({
      id_household: [this.id_household, Validators.required],
      profession_head_of_household: [this.profession_head_of_household, [Validators.required, Validators.max(255)]],
      other_profession: [this.other_profession, [Validators.required, Validators.max(255)]],
      usual_source_of_income: [this.usual_source_of_income, [Validators.required, Validators.max(255)]],
      proprio_location: [this.selected_proprio_location, Validators.required],
      rent_amount: [this.rent_amount, Validators.required],
      number_habitation: [this.number_habitation, Validators.required],
      number_of_member: [this.number_of_member, Validators.required],
      bedroom: [this.bedroom, Validators.required],
      other_factor: [this.other_factor, [Validators.required, Validators.max(255)]],
      capacity_cost: [this.selected_capacity_cost, Validators.required],
      payment_type: [this.selected_payment_type, Validators.required],
      other_info: [this.other_info, [Validators.required, Validators.max(255)]]
    })
  }

  getHousehold() {
    this.serviceHousehold.get().subscribe(response => {
      this.households = response.households
    })
  }

  update() {
    this.service.update(this.id, this.form.value).subscribe((response) => {
      this.toast.show(response)
      this.close();
    })
  }

  close() {
    this.dialogRef.close(this.form.value);
  }
}

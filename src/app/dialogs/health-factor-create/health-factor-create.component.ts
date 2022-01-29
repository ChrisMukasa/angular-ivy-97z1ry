import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { HealthFactorService } from 'src/app/service/health-factor.service';
import { Household } from 'src/app/service/model/household.model';
import { HouseholdService } from 'src/app/service/household.service';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastService } from 'src/app/ng-material/toast.service';

@Component({
  selector: 'app-health-factor-create',
  templateUrl: './health-factor-create.component.html',
  styleUrls: ['./health-factor-create.component.css']
})
export class HealthFactorCreateComponent implements OnInit {

  form      !: FormGroup;
  
  households: Household[] = []

  id_household          !: string
  family_diseases       !: string
  other_family_diseases !: string
  usual_use_service     !: string

  constructor(
    public service: HealthFactorService,
    public serviceHousehold: HouseholdService,
    private builder: FormBuilder,
    private toast: ToastService,
    public dialogRef: MatDialogRef<HealthFactorCreateComponent>) { }

  ngOnInit(): void {
    this.getHousehold()
    this.form = this.builder.group({
      id_household: [this.id_household, [Validators.required]],
      family_diseases: [this.family_diseases, [Validators.required, Validators.max(100)]],
      other_family_diseases: [this.other_family_diseases, [Validators.required, Validators.max(255)]],
      usual_use_service: [this.usual_use_service, [Validators.required, Validators.max(255)]],
    });
  }

  create() {
    this.service.create(this.form.value).subscribe((response) => {
      this.toast.show(response)
      this.close()
    })
  }

  getHousehold() {
    this.serviceHousehold.get().subscribe(response => {
      this.households = response.households
    })
  }

  close() {
    this.dialogRef.close(this.form.value);
  }
}

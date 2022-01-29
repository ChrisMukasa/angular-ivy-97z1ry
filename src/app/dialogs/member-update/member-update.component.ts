import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Household } from 'src/app/service/model/household.model';
import { HouseholdService } from 'src/app/service/household.service';
import { MaritalStatus } from 'src/app/service/model/marital-status.model';
import { MaritalStatusService } from 'src/app/service/marital-status.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MemberService } from 'src/app/service/member.service';
import { Nationality } from 'src/app/service/model/nationality.model';
import { NationalityService } from 'src/app/service/nationality.service';
import { Relationship } from 'src/app/service/model/relationship.model';
import { RelationshipService } from 'src/app/service/relationship.service';
import { Religion } from 'src/app/service/model/religion.model';
import { ReligionService } from 'src/app/service/religion.service';
import { Schooling } from 'src/app/service/model/schooling.model';
import { SchoolingService } from 'src/app/service/schooling.service';
import { ToastService } from 'src/app/ng-material/toast.service';

@Component({
  selector: 'app-member-update',
  templateUrl: './member-update.component.html',
  styleUrls: ['./member-update.component.css']
})
export class MemberUpdateComponent implements OnInit {

  form      !: FormGroup;


  households: Household[] = []
  relationships: Relationship[] = []
  marital_status: MaritalStatus[] = []
  schoolings: Schooling[] = []
  religions: Religion[] = []
  nationalities: Nationality[] = []

  id                !: number
  id_household      !: string
  id_relationship   !: string
  id_marital_status !: string
  id_schooling      !: string
  id_religion       !: number
  id_nationality    !: number

  fullname    !: string
  gender      !: string
  dob         !: string
  pob         !: string
  phone       !: string
  mutual      !: string
  profession  !: string
  observation !: string

  genders = [
    { designation: 'MASCULIN' },
    { designation: 'FEMININ' },
  ]

  mutuals = [
    { id: 1, designation: 'OUI' },
    { id: 2, designation: 'NON' },
  ]

  constructor(
    public service: MemberService,
    public serviceHousehold: HouseholdService,
    public serviceRelationship: RelationshipService,
    public serviceMaritalStatus: MaritalStatusService,
    public serviceSchooling: SchoolingService,
    public serviceReligion: ReligionService,
    public serviceNationality: NationalityService,
    private builder: FormBuilder,
    private toast: ToastService,
    public dialogRef: MatDialogRef<MemberUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) data: any) {
    this.id = data.id
    this.id_household = data.id_household
    this.id_relationship = data.id_relationship
    this.id_marital_status = data.id_marital_status
    this.id_schooling = data.id_schooling
    this.id_religion = data.id_religion
    this.fullname = data.fullname
    this.gender = data.gender
    this.dob = data.dob
    this.pob = data.pob
    this.phone = data.phone
    this.mutual = data.mutual
    this.profession = data.profession
    this.observation = data.observation
  }

  ngOnInit(): void {
    this.getHousehold()
    this.getRelationship()
    this.getMaritalStatus()
    this.getSchooling()
    this.getReligion()
    this.getNationality()

    this.form = this.builder.group({
      id_household: [this.id_household, Validators.required],
      id_relationship: [this.id_relationship, Validators.required],
      id_marital_status: [this.id_marital_status, Validators.required],
      id_schooling: [this.id_schooling, Validators.required],
      id_religion: [this.id_religion, Validators.required],
      fullname: [this.fullname, [Validators.required, Validators.max(100)]],
      gender: [this.gender, [Validators.required, Validators.max(10)]],
      dob: [this.dob, [Validators.required, Validators.max(10)]],
      pob: [this.pob, [Validators.required, Validators.max(50)]],
      phone: [this.phone, [Validators.required, Validators.minLength(9), Validators.minLength(13)]],
      mutual: [this.mutual, Validators.required],
      profession: [this.profession, [Validators.required, Validators.max(50)]],
      observation: [this.observation, [Validators.required, Validators.max(255)]]
    });
  }

  update() {
    console.log(this.form.value);
    this.service.update(this.id, this.form.value).subscribe((response) => {
      this.toast.show(response)
      this.close();
    })
  }

  getHousehold() {
    this.serviceHousehold.get().subscribe(response => {
      this.households = response.households
    })
  }

  getRelationship() {
    this.serviceRelationship.get().subscribe(response => {
      this.relationships = response.relationships
    })
  }

  getMaritalStatus() {
    this.serviceMaritalStatus.get().subscribe(response => {
      this.marital_status = response.marital_status
    })
  }

  getSchooling() {
    this.serviceSchooling.get().subscribe(response => {
      this.schoolings = response.schoolings
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

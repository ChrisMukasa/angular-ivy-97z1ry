import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AvenueService } from 'src/app/service/avenue.service';
import { District } from './../../service/model/district.model';
import { DistrictService } from 'src/app/service/district.service';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastService } from 'src/app/ng-material/toast.service';

@Component({
  selector: 'app-avenue-create',
  templateUrl: './avenue-create.component.html',
  styleUrls: ['./avenue-create.component.css']
})
export class AvenueCreateComponent implements OnInit {

  form      !: FormGroup;

  districts: District[] = []

  id_district !: number
  designation !: string

  message     !: string

  constructor(
    public service: AvenueService,
    public serviceDistrict: DistrictService,
    private builder: FormBuilder,
    private toast: ToastService,
    public dialogRef: MatDialogRef<AvenueCreateComponent>) { }

  ngOnInit(): void {
    this.getDistrict()
    this.form = this.builder.group({
      id_district: [this.id_district, [Validators.required]],
      designation: [this.designation, [Validators.required, Validators.max(50)]],
    });
  }

  create() {
    this.service.create(this.form.value.id_district, this.form.value).subscribe((response) => {
      this.toast.show(response)
      this.close();
    })
  }

  getDistrict() {
    this.serviceDistrict.get().subscribe(response => {
      this.districts = response.districts
      console.log(this.districts)
    })
  }

  close() {
    this.dialogRef.close(this.form.value);
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Commune } from './../../service/model/commune.model';
import { CommuneService } from 'src/app/service/commune.service';
import { DistrictService } from 'src/app/service/district.service';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastService } from './../../ng-material/toast.service';

@Component({
  selector: 'app-district-create',
  templateUrl: './district-create.component.html',
  styleUrls: ['./district-create.component.css']
})
export class DistrictCreateComponent implements OnInit {

  form      !: FormGroup;


  communes: Commune[] = []

  id_commune  !: number
  designation !: string

  message     !: string

  constructor(
    public service: DistrictService,
    public serviceCommune: CommuneService,
    private builder: FormBuilder,
    private toast: ToastService,
    public dialogRef: MatDialogRef<DistrictCreateComponent>) {
    this.message = ''
  }

  ngOnInit(): void {
    this.getCommune()
    this.form = this.builder.group({
      id_commune: [this.id_commune, [Validators.required]],
      designation: [this.designation, [Validators.required, Validators.max(50)]],
    });
  }

  create() {
    this.service.create(this.form.value.id_commune, this.form.value).subscribe((response) => {
      this.toast.show(response)
      this.close()
    })
  }

  getCommune() {
    this.serviceCommune.get().subscribe(response => {
      this.communes = response.communes
    })
  }

  close() {
    this.dialogRef.close(this.form.value);
  }
}

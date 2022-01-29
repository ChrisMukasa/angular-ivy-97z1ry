import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { City } from 'src/app/service/model/city.model';
import { CityService } from 'src/app/service/city.service';
import { CommuneService } from 'src/app/service/commune.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastService } from 'src/app/ng-material/toast.service';

@Component({
  selector: 'app-commune-update',
  templateUrl: './commune-update.component.html',
  styleUrls: ['./commune-update.component.css']
})
export class CommuneUpdateComponent implements OnInit {

  form      !: FormGroup;


  cities: City[] = []

  id          !: number
  id_city     !: number
  designation !: string

  message     !: string

  constructor(
    public service: CommuneService,
    public serviceCity: CityService,
    private builder: FormBuilder,
    private toast: ToastService,
    public dialogRef: MatDialogRef<CommuneUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) data: any) {
    this.message = ''
    this.id = data.id
    this.id_city = data.id_city
    this.designation = data.designation
  }

  ngOnInit(): void {
    this.getDistrict()
    this.form = this.builder.group({
      id_city: [this.id_city, [Validators.required]],
      designation: [this.designation, [Validators.required, Validators.max(50)]],
    });
  }

  update() {
    this.service.update(this.form.value.id_city, this.id, this.form.value).subscribe((response) => {
      this.toast.show(response)
      this.close()
    })
  }

  getDistrict() {
    this.serviceCity.get().subscribe(response => {
      this.cities = response.cities
    })
  }

  close() {
    this.dialogRef.close(this.form.value);
  }
}

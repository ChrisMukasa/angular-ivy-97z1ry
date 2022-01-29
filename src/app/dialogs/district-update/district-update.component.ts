import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastService } from 'src/app/ng-material/toast.service';
import { CommuneService } from 'src/app/service/commune.service';
import { DistrictService } from 'src/app/service/district.service';
import { Commune } from 'src/app/service/model/commune.model';

@Component({
  selector: 'app-district-update',
  templateUrl: './district-update.component.html',
  styleUrls: ['./district-update.component.css']
})
export class DistrictUpdateComponent implements OnInit {

  form      !: FormGroup;


  communes: Commune[] = []

  id          !: number
  id_commune  !: number
  designation !: string

  constructor(
    public service: DistrictService,
    public serviceCommune: CommuneService,
    private builder: FormBuilder,
    private toast: ToastService,
    public dialogRef: MatDialogRef<DistrictUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) data: any) {
    this.id = data.id
    this.id_commune = data.id_commune
    this.designation = data.designation
  }

  ngOnInit(): void {
    this.getCommune()
    this.form = this.builder.group({
      id_commune: [this.id_commune, [Validators.required]],
      designation: [this.designation, [Validators.required, Validators.max(50)]],
    });
  }

  update() {
    this.service.update(this.form.value.id_commune, this.id, this.form.value).subscribe((response) => {
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

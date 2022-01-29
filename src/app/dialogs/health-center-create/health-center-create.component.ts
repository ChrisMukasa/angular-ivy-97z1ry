import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { HealthCenterService } from 'src/app/service/health-center.service';
import { HealthZone } from './../../service/model/health-zone.model';
import { HealthZoneService } from 'src/app/service/health-zone.service';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastService } from 'src/app/ng-material/toast.service';

@Component({
  selector: 'app-health-center-create',
  templateUrl: './health-center-create.component.html',
  styleUrls: ['./health-center-create.component.css']
})
export class HealthCenterCreateComponent implements OnInit {

  form      !: FormGroup;


  health_zones: HealthZone[] = []

  id_health_zone !: number
  designation    !: string

  constructor(
    public service: HealthCenterService,
    public serviceHealthZone: HealthZoneService,
    private builder: FormBuilder,
    private toast: ToastService,
    public dialogRef: MatDialogRef<HealthCenterCreateComponent>) { }

  ngOnInit(): void {
    this.getHealthZone()
    this.form = this.builder.group({
      id_health_zone: [this.id_health_zone, [Validators.required]],
      designation: [this.designation, [Validators.required, Validators.max(50)]],
    });
  }

  create() {
    this.service.create(this.form.value.id_health_zone, this.form.value).subscribe((response) => {
      this.toast.show(response)
      this.close();
    })
  }

  getHealthZone() {
    this.serviceHealthZone.get().subscribe(response => this.health_zones = response.health_zones)
  }

  close() {
    this.dialogRef.close(this.form.value);
  }
}

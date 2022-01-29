import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastService } from 'src/app/ng-material/toast.service';
import { HealthCenterService } from 'src/app/service/health-center.service';
import { HealthZoneService } from 'src/app/service/health-zone.service';
import { HealthZone } from 'src/app/service/model/health-zone.model';

@Component({
  selector: 'app-health-center-update',
  templateUrl: './health-center-update.component.html',
  styleUrls: ['./health-center-update.component.css']
})
export class HealthCenterUpdateComponent implements OnInit {

  form      !: FormGroup;


  health_zones: HealthZone[] = []

  id            !: number
  id_health_zone!: number
  designation   !: string

  constructor(
    public service: HealthCenterService,
    public serviceHealthZone: HealthZoneService,
    private builder: FormBuilder,
    private toast: ToastService,
    public dialogRef: MatDialogRef<HealthCenterUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) data: any) {
    this.id = data.id
    this.id_health_zone = data.id_health_zone
    this.designation = data.designation
  }

  ngOnInit(): void {
    this.getHealthZone()
    this.form = this.builder.group({
      id_health_zone: [this.id_health_zone, [Validators.required]],
      designation: [this.designation, [Validators.required, Validators.max(50)]],
    });
  }

  update() {
    this.service.update(this.form.value.id_health_zone, this.id, this.form.value).subscribe((response) => {
      this.toast.show(response)
      this.close()
    })
  }

  getHealthZone() {
    this.serviceHealthZone.get().subscribe(response => {
      this.health_zones = response.health_zones
    })
  }

  close() {
    this.dialogRef.close(this.form.value);
  }
}

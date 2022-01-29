import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastService } from 'src/app/ng-material/toast.service';
import { HealthZoneService } from 'src/app/service/health-zone.service';

@Component({
  selector: 'app-health-zone-update',
  templateUrl: './health-zone-update.component.html',
  styleUrls: ['./health-zone-update.component.css']
})
export class HealthZoneUpdateComponent implements OnInit {

  form      !: FormGroup;


  id          !: number
  designation !: string

  message     !: string

  constructor(
    public service: HealthZoneService,
    private builder: FormBuilder,
    public dialogRef: MatDialogRef<HealthZoneUpdateComponent>,
    private toast: ToastService,
    @Inject(MAT_DIALOG_DATA) data: any) {
    this.id = data.id
    this.designation = data.designation
  }

  ngOnInit(): void {
    this.form = this.builder.group({
      designation: [this.designation, [Validators.required, Validators.max(50)]],
    });
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

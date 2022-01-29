import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastService } from 'src/app/ng-material/toast.service';
import { MaritalStatusService } from 'src/app/service/marital-status.service';

@Component({
  selector: 'app-marital-status-update',
  templateUrl: './marital-status-update.component.html',
  styleUrls: ['./marital-status-update.component.css']
})
export class MaritalStatusUpdateComponent implements OnInit {

  form      !: FormGroup;
  hide = true
  hideRetry = true

  id          !: string
  designation !: string

  constructor(
    public service: MaritalStatusService,
    private builder: FormBuilder,
    private toast: ToastService,
    public dialogRef: MatDialogRef<MaritalStatusUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) data: any) {
    this.id = data.id
    this.designation = data.designation
  }

  ngOnInit(): void {
    this.form = this.builder.group({
      id: [this.id, [Validators.required, Validators.max(10)]],
      designation: [this.designation, [Validators.required, Validators.max(50)]],
    });
  }

  update() {
    this.service.update(this.id, this.form.value).subscribe((response) => {
      this.toast.show(response)
      this.close()
    })
  }

  close() {
    this.dialogRef.close(this.form.value);
  }
}

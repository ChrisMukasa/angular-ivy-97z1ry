import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastService } from 'src/app/ng-material/toast.service';
import { SchoolingService } from 'src/app/service/schooling.service';

@Component({
  selector: 'app-schooling-update',
  templateUrl: './schooling-update.component.html',
  styleUrls: ['./schooling-update.component.css']
})
export class SchoolingUpdateComponent implements OnInit {

  form      !: FormGroup;
  hide = true
  hideRetry = true

  id          !: string
  designation !: string

  constructor(
    public service: SchoolingService,
    private builder: FormBuilder,
    private toast: ToastService,
    public dialogRef: MatDialogRef<SchoolingUpdateComponent>,
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

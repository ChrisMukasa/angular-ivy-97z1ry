import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MaritalStatusService } from 'src/app/service/marital-status.service';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastService } from 'src/app/ng-material/toast.service';

@Component({
  selector: 'app-marital-status-create',
  templateUrl: './marital-status-create.component.html',
  styleUrls: ['./marital-status-create.component.css']
})
export class MaritalStatusCreateComponent implements OnInit {

  form      !: FormGroup;


  id          !: string
  designation !: string

  constructor(
    public service: MaritalStatusService,
    private builder: FormBuilder,
    private toast: ToastService,
    public dialogRef: MatDialogRef<MaritalStatusCreateComponent>) { }

  ngOnInit(): void {
    this.form = this.builder.group({
      id: [this.id, [Validators.required, Validators.max(10)]],
      designation: [this.designation, [Validators.required, Validators.max(50)]],
    });
  }

  create() {
    this.service.create(this.form.value).subscribe((response) => {
      this.toast.show(response)
      this.close()
    })
  }

  close() {
    this.dialogRef.close(this.form.value);
  }
}

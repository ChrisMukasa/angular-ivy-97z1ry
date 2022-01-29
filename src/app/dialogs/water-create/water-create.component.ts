import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MatDialogRef } from '@angular/material/dialog';
import { ToastService } from 'src/app/ng-material/toast.service';
import { WaterService } from 'src/app/service/water.service';

@Component({
  selector: 'app-water-create',
  templateUrl: './water-create.component.html',
  styleUrls: ['./water-create.component.css']
})
export class WaterCreateComponent implements OnInit {

  form      !: FormGroup;


  designation !: string

  constructor(
    public service: WaterService,
    private builder: FormBuilder,
    private toast: ToastService,
    public dialogRef: MatDialogRef<WaterCreateComponent>) { }

  ngOnInit(): void {
    this.form = this.builder.group({
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

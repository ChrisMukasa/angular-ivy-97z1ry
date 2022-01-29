import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CityService } from 'src/app/service/city.service';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastService } from 'src/app/ng-material/toast.service';

@Component({
  selector: 'app-city-create',
  templateUrl: './city-create.component.html',
  styleUrls: ['./city-create.component.css']
})
export class CityCreateComponent implements OnInit {

  form      !: FormGroup;


  designation !: string

  constructor(
    public service: CityService,
    private builder: FormBuilder,
    private toast: ToastService,
    public dialogRef: MatDialogRef<CityCreateComponent>) { }

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

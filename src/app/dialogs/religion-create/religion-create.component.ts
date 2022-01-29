import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MatDialogRef } from '@angular/material/dialog';
import { ReligionService } from 'src/app/service/religion.service';
import { ToastService } from 'src/app/ng-material/toast.service';

@Component({
  selector: 'app-religion-create',
  templateUrl: './religion-create.component.html',
  styleUrls: ['./religion-create.component.css']
})
export class ReligionCreateComponent implements OnInit {

  form      !: FormGroup;


  designation !: string

  constructor(
    public service: ReligionService,
    private builder: FormBuilder,
    private toast: ToastService,
    public dialogRef: MatDialogRef<ReligionCreateComponent>) { }

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

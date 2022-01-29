import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MatDialogRef } from '@angular/material/dialog';
import { RelationshipService } from 'src/app/service/relationship.service';
import { ToastService } from 'src/app/ng-material/toast.service';

@Component({
  selector: 'app-relationship-create',
  templateUrl: './relationship-create.component.html',
  styleUrls: ['./relationship-create.component.css']
})
export class RelationshipCreateComponent implements OnInit {

  form      !: FormGroup;


  id          !: string
  designation !: string

  constructor(
    public service: RelationshipService,
    private builder: FormBuilder,
    private toast: ToastService,
    public dialogRef: MatDialogRef<RelationshipCreateComponent>) { }

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

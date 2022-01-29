import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastService } from 'src/app/ng-material/toast.service';
import { RelationshipService } from 'src/app/service/relationship.service';

@Component({
  selector: 'app-relationship-update',
  templateUrl: './relationship-update.component.html',
  styleUrls: ['./relationship-update.component.css']
})
export class RelationshipUpdateComponent implements OnInit {

  form      !: FormGroup;
  hide = true
  hideRetry = true

  id          !: string
  designation !: string

  constructor(
    public service: RelationshipService,
    private builder: FormBuilder,
    private toast: ToastService,
    public dialogRef: MatDialogRef<RelationshipUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) data: any) {
    this.id = data.id
    this.designation = data.designation
  }

  ngOnInit(): void {
    this.form = this.builder.group({
      id: [this.id, [Validators.required, Validators.max(10)]],
      designation: [this.designation, [Validators.required, Validators.max(50)]]
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

import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastService } from 'src/app/ng-material/toast.service';
import { ReligionService } from 'src/app/service/religion.service';

@Component({
  selector: 'app-religion-update',
  templateUrl: './religion-update.component.html',
  styleUrls: ['./religion-update.component.css']
})
export class ReligionUpdateComponent implements OnInit {

  form      !: FormGroup;
  hide = true
  hideRetry = true

  id          !: number
  designation !: string

  constructor(
    public service: ReligionService,
    private builder: FormBuilder,
    private toast: ToastService,
    public dialogRef: MatDialogRef<ReligionUpdateComponent>,
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
      this.close()
    })
  }

  close() {
    this.dialogRef.close(this.form.value);
  }
}

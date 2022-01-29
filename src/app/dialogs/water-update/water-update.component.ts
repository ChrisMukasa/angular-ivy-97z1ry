import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastService } from 'src/app/ng-material/toast.service';
import { WaterService } from 'src/app/service/water.service';

@Component({
  selector: 'app-water-update',
  templateUrl: './water-update.component.html',
  styleUrls: ['./water-update.component.css']
})
export class WaterUpdateComponent implements OnInit {

  form      !: FormGroup;
  hide = true
  hideRetry = true

  id          !: number
  designation !: string

  constructor(
    public service: WaterService,
    private builder: FormBuilder,
    private toast: ToastService,
    public dialogRef: MatDialogRef<WaterUpdateComponent>,
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

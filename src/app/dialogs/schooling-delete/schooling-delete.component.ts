import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastService } from 'src/app/ng-material/toast.service';
import { SchoolingService } from 'src/app/service/schooling.service';

@Component({
  selector: 'app-schooling-delete',
  templateUrl: './schooling-delete.component.html',
  styleUrls: ['./schooling-delete.component.css']
})
export class SchoolingDeleteComponent implements OnInit {

  id  !: string

  constructor(
    public service  : SchoolingService,
    public dialogRef: MatDialogRef<SchoolingDeleteComponent>,
    private toast   : ToastService,
    @Inject(MAT_DIALOG_DATA) data: any
  ) {
    this.id = data.id
  }

  ngOnInit(): void {}

  delete() {
    this.service.delete(this.id).subscribe((response) => {
      this.toast.show(response)
      this.close()
    })
  }

  close() {
    this.dialogRef.close();
  }
}

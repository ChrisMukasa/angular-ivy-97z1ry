import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastService } from 'src/app/ng-material/toast.service';
import { AvenueService } from 'src/app/service/avenue.service';

@Component({
  selector: 'app-avenue-delete',
  templateUrl: './avenue-delete.component.html',
  styleUrls: ['./avenue-delete.component.css']
})
export class AvenueDeleteComponent implements OnInit {

  id !: number

  constructor(
    public service: AvenueService,
    public dialogRef: MatDialogRef<AvenueDeleteComponent>,
    private toast: ToastService,
    @Inject(MAT_DIALOG_DATA) data: any
  ) {
    this.id = data.id
  }

  ngOnInit(): void { }

  delete() {
    this.service.delete(this.id).subscribe((response) => {
      this.toast.show(response)
      this.close();
    })
  }

  close() {
    this.dialogRef.close();
  }
}

import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastService } from 'src/app/ng-material/toast.service';
import { WaterService } from 'src/app/service/water.service';

@Component({
  selector: 'app-water-delete',
  templateUrl: './water-delete.component.html',
  styleUrls: ['./water-delete.component.css']
})
export class WaterDeleteComponent implements OnInit {

  id  !: number

  constructor(
    public service: WaterService,
    public dialogRef: MatDialogRef<WaterDeleteComponent>,
    private toast: ToastService,
    @Inject(MAT_DIALOG_DATA) data: any
  ) {
    this.id = data.id
  }

  ngOnInit(): void { }

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

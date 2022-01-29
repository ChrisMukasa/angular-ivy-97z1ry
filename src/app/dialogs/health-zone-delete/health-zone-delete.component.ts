import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastService } from 'src/app/ng-material/toast.service';
import { HealthZoneService } from 'src/app/service/health-zone.service';

@Component({
  selector: 'app-health-zone-delete',
  templateUrl: './health-zone-delete.component.html',
  styleUrls: ['./health-zone-delete.component.css']
})
export class HealthZoneDeleteComponent implements OnInit {

  id!: number

  constructor(
    public service: HealthZoneService,
    public dialogRef: MatDialogRef<HealthZoneDeleteComponent>,
    private toast: ToastService,
    @Inject(MAT_DIALOG_DATA) data: any
  ) {
    this.id = data.id
    console.log('HealthZone ID ==> ', data.id)
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

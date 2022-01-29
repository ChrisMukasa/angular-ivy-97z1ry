import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HealthZone } from 'src/app/service/model/health-zone.model';

@Component({
  selector: 'app-health-zone-view',
  templateUrl: './health-zone-view.component.html',
  styleUrls: ['./health-zone-view.component.css']
})
export class HealthZoneViewComponent implements OnInit {

  health_zone!: HealthZone

  constructor(private dialog: MatDialogRef<HealthZoneViewComponent>, @Inject(MAT_DIALOG_DATA) data: any) {
    this.health_zone = data
  }

  ngOnInit(): void {}

  close() {
    this.dialog.close();
  }
}

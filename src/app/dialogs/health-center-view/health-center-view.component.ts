import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HealthCenter } from 'src/app/service/model/health-center.model';

@Component({
  selector: 'app-health-center-view',
  templateUrl: './health-center-view.component.html',
  styleUrls: ['./health-center-view.component.css']
})
export class HealthCenterViewComponent implements OnInit {

  health_center !: HealthCenter

  constructor(private dialog: MatDialogRef<HealthCenterViewComponent>, @Inject(MAT_DIALOG_DATA) data: any) {
    this.health_center = data
  }

  ngOnInit(): void {}

  close() {
    this.dialog.close();
  }
}

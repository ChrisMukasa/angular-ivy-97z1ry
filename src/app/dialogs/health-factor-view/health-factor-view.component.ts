import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HealthFactor } from 'src/app/service/model/health-factor.model';

@Component({
  selector: 'app-health-factor-view',
  templateUrl: './health-factor-view.component.html',
  styleUrls: ['./health-factor-view.component.css']
})
export class HealthFactorViewComponent implements OnInit {

  health_factor!: HealthFactor

  constructor(private dialog: MatDialogRef<HealthFactorViewComponent>, @Inject(MAT_DIALOG_DATA) data: any) {
    this.health_factor = data
  }

  ngOnInit(): void {}

  close() {
    this.dialog.close();
  }
}

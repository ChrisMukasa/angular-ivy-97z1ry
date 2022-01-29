import { PrimaryPrediction } from 'src/app/service/model/primary-prediction.model';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector   : 'app-primary-prediction-view',
  templateUrl: './primary-prediction-view.component.html',
  styleUrls  : ['./primary-prediction-view.component.css']
})
export class PrimaryPredictionViewComponent implements OnInit {

  primary_prediction!: PrimaryPrediction

  light_petrol   = false
  light_sun      = false
  light_public   = false

  toilet_inside  = false
  toilet_outside = false

  french         = false
  english        = false
  kiswahili      = false
  lingala        = false

  constructor(
    private dialog: MatDialogRef<PrimaryPredictionViewComponent>,
    @Inject(MAT_DIALOG_DATA) data: any
  ) {
    this.primary_prediction = data
  }

  ngOnInit(): void {}

  close() {
    this.dialog.close();
  }
}

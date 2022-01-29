import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Water } from 'src/app/service/model/water.model';

@Component({
  selector: 'app-water-view',
  templateUrl: './water-view.component.html',
  styleUrls: ['./water-view.component.css']
})
export class WaterViewComponent implements OnInit {

  water!: Water

  constructor(private dialog: MatDialogRef<WaterViewComponent>, @Inject(MAT_DIALOG_DATA) data: any) {
    this.water = data
  }

  ngOnInit(): void {}

  close() {
    this.dialog.close();
  }
}

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Avenue } from 'src/app/service/model/avenue.model';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-avenue-view',
  templateUrl: './avenue-view.component.html',
  styleUrls: ['./avenue-view.component.css']
})
export class AvenueViewComponent implements OnInit {

  avenue!: Avenue
  
  constructor(private dialog: MatDialogRef<AvenueViewComponent>, @Inject(MAT_DIALOG_DATA) data: any) {
    this.avenue = data
  }

  ngOnInit(): void {}

  close() {
    this.dialog.close();
  }
}
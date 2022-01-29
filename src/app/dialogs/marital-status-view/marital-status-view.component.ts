import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MaritalStatus } from 'src/app/service/model/marital-status.model';

@Component({
  selector: 'app-marital-status-view',
  templateUrl: './marital-status-view.component.html',
  styleUrls: ['./marital-status-view.component.css']
})
export class MaritalStatusViewComponent implements OnInit {

  marital_status!: MaritalStatus

  constructor(private dialog: MatDialogRef<MaritalStatusViewComponent>, @Inject(MAT_DIALOG_DATA) data: any) {
    this.marital_status = data
  }

  ngOnInit(): void {}

  close() {
    this.dialog.close();
  }
}

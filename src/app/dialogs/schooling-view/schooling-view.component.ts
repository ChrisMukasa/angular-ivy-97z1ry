import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Schooling } from 'src/app/service/model/schooling.model';

@Component({
  selector: 'app-schooling-view',
  templateUrl: './schooling-view.component.html',
  styleUrls: ['./schooling-view.component.css']
})
export class SchoolingViewComponent implements OnInit {

  schooling!: Schooling

  constructor(private dialog: MatDialogRef<SchoolingViewComponent>, @Inject(MAT_DIALOG_DATA) data: any) {
    this.schooling = data
  }

  ngOnInit(): void {}

  close() {
    this.dialog.close();
  }
}

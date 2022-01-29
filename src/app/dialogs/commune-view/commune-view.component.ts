import { Commune } from 'src/app/service/model/commune.model';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-commune-view',
  templateUrl: './commune-view.component.html',
  styleUrls: ['./commune-view.component.css']
})
export class CommuneViewComponent implements OnInit {

  commune!: Commune
  
  constructor(private dialog: MatDialogRef<CommuneViewComponent>, @Inject(MAT_DIALOG_DATA) data: any) {
    this.commune = data
  }

  ngOnInit(): void {}

  close() {
    this.dialog.close();
  }
}
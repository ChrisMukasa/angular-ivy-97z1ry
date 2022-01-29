import { City } from 'src/app/service/model/city.model';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-city-view',
  templateUrl: './city-view.component.html',
  styleUrls: ['./city-view.component.css']
})
export class CityViewComponent implements OnInit {

  city!: City
  
  constructor(private dialog: MatDialogRef<CityViewComponent>, @Inject(MAT_DIALOG_DATA) data: any) {
    this.city = data
  }

  ngOnInit(): void {}

  close() {
    this.dialog.close();
  }
}
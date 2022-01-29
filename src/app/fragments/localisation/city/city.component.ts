import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSort, Sort } from '@angular/material/sort';

import { City } from './../../../service/model/city.model';
import { CityCreateComponent } from 'src/app/dialogs/city-create/city-create.component';
import { CityDeleteComponent } from 'src/app/dialogs/city-delete/city-delete.component';
import { CityService } from 'src/app/service/city.service';
import { CityUpdateComponent } from 'src/app/dialogs/city-update/city-update.component';
import { CityViewComponent } from 'src/app/dialogs/city-view/city-view.component';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

  cities: City[] = []
  city !: City
  dataSource: any;

  constructor(private service: CityService, public dialog: MatDialog, private announcer: LiveAnnouncer) { }

  ngOnInit(): void {
    this.getCity()
  }

  displayedColumns: string[] = ['id', 'designation', 'created_at', 'actions'];

  @ViewChild(MatPaginator) paginator!: MatPaginator
  @ViewChild(MatSort)      sort     !: MatSort;

  getCity() {
    this.service.get().pipe().subscribe(response => {
      this.cities              = response.cities
      this.dataSource           = new MatTableDataSource<City>(this.cities);
      this.dataSource.paginator = this.paginator
      this.dataSource.sort      = this.sort;
    })
  }

  performSearch(value: string) {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }
  
  sortChange(sort: Sort) {
    if (sort.direction) {
      this.announcer.announce(`Sorted ${sort.direction}ending`);
    } else {
      this.announcer.announce('Sorting cleared');
    }
  }

  viewDialog(city: City): void{
    const config        = new MatDialogConfig()
    config.disableClose = true
    config.autoFocus    = true
    config.data         = city

    this.dialog.open(CityViewComponent, config)
  }

  createDialog(): void {
    const config        = new MatDialogConfig()
    config.disableClose = true
    config.autoFocus    = true

    const response = this.dialog.open(CityCreateComponent, config)

    response.afterClosed().subscribe(data => {
      this.getCity()
    })
  }

  updateDialog(city: City): void {
    const config        = new MatDialogConfig()
    config.disableClose = true
    config.autoFocus    = true

    config.data = city

    const response = this.dialog.open(CityUpdateComponent, config)

    response.afterClosed().subscribe(data => {
      this.getCity()
      console.log("Dialog output:", data)
    })
  }

  deleteDialog(id: number): void {
    const config        = new MatDialogConfig()
    config.disableClose = true
    config.autoFocus    = true

    config.data = {'id' : id}

    const response = this.dialog.open(CityDeleteComponent, config)

    response.afterClosed().subscribe(data => {
      this.getCity()
    })
  }
}

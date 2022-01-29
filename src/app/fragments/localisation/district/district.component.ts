import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSort, Sort } from '@angular/material/sort';

import { District } from './../../../service/model/district.model';
import { DistrictCreateComponent } from 'src/app/dialogs/district-create/district-create.component';
import { DistrictDeleteComponent } from 'src/app/dialogs/district-delete/district-delete.component';
import { DistrictService } from 'src/app/service/district.service';
import { DistrictUpdateComponent } from 'src/app/dialogs/district-update/district-update.component';
import { DistrictViewComponent } from 'src/app/dialogs/district-view/district-view.component';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-district',
  templateUrl: './district.component.html',
  styleUrls: ['./district.component.css']
})
export class DistrictComponent implements OnInit {

  districts: District[] = []
  district !: District
  dataSource: any;

  constructor(private service: DistrictService, public dialog: MatDialog, private announcer: LiveAnnouncer) { }

  ngOnInit(): void {
    this.getDistrict()
  }

  displayedColumns: string[] = ['id', 'commune', 'designation', 'created_at', 'actions'];

  @ViewChild(MatPaginator) paginator!: MatPaginator
  @ViewChild(MatSort)      sort     !: MatSort;

  getDistrict() {
    this.service.get().pipe().subscribe(response => {
      this.districts             = response.districts
      this.dataSource           = new MatTableDataSource<District>(this.districts);
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

  viewDialog(district: District): void{
    const config        = new MatDialogConfig()
    config.disableClose = true
    config.autoFocus    = true
    config.data         = district

    this.dialog.open(DistrictViewComponent, config)
  }

  createDialog(): void {
    const config        = new MatDialogConfig()
    config.disableClose = true
    config.autoFocus    = true

    const response = this.dialog.open(DistrictCreateComponent, config)

    response.afterClosed().subscribe(data => {
      this.getDistrict()
    })
  }

  updateDialog(district: District): void {
    const config        = new MatDialogConfig()
    config.disableClose = true
    config.autoFocus    = true

    config.data = district

    const response = this.dialog.open(DistrictUpdateComponent, config)

    response.afterClosed().subscribe(data => {
      this.getDistrict()
      console.log("Dialog output:", data)
    })
  }

  deleteDialog(id: number): void {
    const config        = new MatDialogConfig()
    config.disableClose = true
    config.autoFocus    = true

    config.data = {'id' : id}

    const response = this.dialog.open(DistrictDeleteComponent, config)

    response.afterClosed().subscribe(data => {
      this.getDistrict()
    })
  }
}

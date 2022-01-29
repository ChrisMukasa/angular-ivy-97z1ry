import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSort, Sort } from '@angular/material/sort';

import { HealthCenter } from 'src/app/service/model/health-center.model';
import { HealthCenterCreateComponent } from 'src/app/dialogs/health-center-create/health-center-create.component';
import { HealthCenterDeleteComponent } from 'src/app/dialogs/health-center-delete/health-center-delete.component';
import { HealthCenterService } from 'src/app/service/health-center.service';
import { HealthCenterUpdateComponent } from 'src/app/dialogs/health-center-update/health-center-update.component';
import { HealthCenterViewComponent } from 'src/app/dialogs/health-center-view/health-center-view.component';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-health-center',
  templateUrl: './health-center.component.html',
  styleUrls: ['./health-center.component.css']
})
export class HealthCenterComponent implements OnInit {

  health_centers: HealthCenter[] = []
  health_center !: HealthCenter
  dataSource: any;

  constructor(private service: HealthCenterService, public dialog: MatDialog, private announcer: LiveAnnouncer) { }

  ngOnInit(): void {
    this.getHealthCenter()
  }

  displayedColumns: string[] = ['id', 'health_zone', 'designation', 'created_at', 'actions'];

  @ViewChild(MatPaginator) paginator!: MatPaginator
  @ViewChild(MatSort)      sort     !: MatSort;

  getHealthCenter() {
    this.service.get().pipe().subscribe(response => {
      this.health_centers             = response.health_centers
      this.dataSource           = new MatTableDataSource<HealthCenter>(this.health_centers);
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

  viewDialog(health_center: HealthCenter): void{
    const config        = new MatDialogConfig()
    config.disableClose = true
    config.autoFocus    = true
    config.data         = health_center

    this.dialog.open(HealthCenterViewComponent, config)
  }

  createDialog(): void {
    const config        = new MatDialogConfig()
    config.disableClose = true
    config.autoFocus    = true

    const response = this.dialog.open(HealthCenterCreateComponent, config)

    response.afterClosed().subscribe(data => {
      this.getHealthCenter()
    })
  }

  updateDialog(health_center: HealthCenter): void {
    const config        = new MatDialogConfig()
    config.disableClose = true
    config.autoFocus    = true

    config.data = health_center

    const response = this.dialog.open(HealthCenterUpdateComponent, config)

    response.afterClosed().subscribe(data => {
      this.getHealthCenter()
      console.log("Dialog output:", data)
    })
  }

  deleteDialog(id: number): void {
    const config        = new MatDialogConfig()
    config.disableClose = true
    config.autoFocus    = true

    config.data = {'id' : id}

    const response = this.dialog.open(HealthCenterDeleteComponent, config)

    response.afterClosed().subscribe(data => {
      this.getHealthCenter()
    })
  }
}

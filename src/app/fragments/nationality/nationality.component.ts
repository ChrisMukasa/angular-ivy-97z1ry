import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSort, Sort } from '@angular/material/sort';

import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Nationality } from 'src/app/service/model/nationality.model';
import { NationalityCreateComponent } from 'src/app/dialogs/nationality-create/nationality-create.component';
import { NationalityDeleteComponent } from 'src/app/dialogs/nationality-delete/nationality-delete.component';
import { NationalityService } from 'src/app/service/nationality.service';
import { NationalityUpdateComponent } from 'src/app/dialogs/nationality-update/nationality-update.component';
import { NationalityViewComponent } from 'src/app/dialogs/nationality-view/nationality-view.component';

@Component({
  selector: 'app-nationality',
  templateUrl: './nationality.component.html',
  styleUrls: ['./nationality.component.css']
})
export class NationalityComponent implements OnInit {

  nationalities: Nationality[] = []
  dataSource: any;

  constructor(private service: NationalityService, public dialog: MatDialog, private announcer: LiveAnnouncer) { }

  ngOnInit(): void {
    this.getNationality()
  }

  displayedColumns: string[] = ['id', 'designation', 'created_at', 'actions'];

  @ViewChild(MatPaginator) paginator!: MatPaginator
  @ViewChild(MatSort)      sort     !: MatSort;

  getNationality() {
    this.service.get().pipe().subscribe(response => {
      this.nationalities        = response.nationalities
      this.dataSource           = new MatTableDataSource<Nationality>(this.nationalities);
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

  viewDialog(nationality: Nationality): void{
    const config        = new MatDialogConfig()
    config.disableClose = true
    config.autoFocus    = true
    config.data         = nationality

    this.dialog.open(NationalityViewComponent, config)
  }

  createDialog(): void {
    const config        = new MatDialogConfig()
    config.disableClose = true
    config.autoFocus    = true

    const response = this.dialog.open(NationalityCreateComponent, config)

    response.afterClosed().subscribe(data => {
      this.getNationality()
    })
  }

  updateDialog(nationality: Nationality): void {
    const config        = new MatDialogConfig()
    config.disableClose = true
    config.autoFocus    = true

    config.data = nationality

    const response = this.dialog.open(NationalityUpdateComponent, config)

    response.afterClosed().subscribe(data => {
      this.getNationality()
      console.log("Dialog output:", data)
    })
  }

  deleteDialog(id: number): void {
    const config        = new MatDialogConfig()
    config.disableClose = true
    config.autoFocus    = true

    config.data = {'id' : id}

    const response = this.dialog.open(NationalityDeleteComponent, config)

    response.afterClosed().subscribe(data => {
      this.getNationality()
    })
  }
}

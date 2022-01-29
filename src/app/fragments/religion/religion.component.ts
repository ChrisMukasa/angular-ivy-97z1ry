import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSort, Sort } from '@angular/material/sort';

import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Religion } from 'src/app/service/model/religion.model';
import { ReligionCreateComponent } from 'src/app/dialogs/religion-create/religion-create.component';
import { ReligionDeleteComponent } from 'src/app/dialogs/religion-delete/religion-delete.component';
import { ReligionService } from 'src/app/service/religion.service';
import { ReligionUpdateComponent } from 'src/app/dialogs/religion-update/religion-update.component';
import { ReligionViewComponent } from 'src/app/dialogs/religion-view/religion-view.component';

@Component({
  selector: 'app-religion',
  templateUrl: './religion.component.html',
  styleUrls: ['./religion.component.css']
})
export class ReligionComponent implements OnInit {

  religions: Religion[] = []
  dataSource: any;

  constructor(private service: ReligionService, public dialog: MatDialog, private announcer: LiveAnnouncer) { }

  ngOnInit(): void {
    this.getReligion()
  }

  displayedColumns: string[] = ['id', 'designation', 'created_at', 'actions'];

  @ViewChild(MatPaginator) paginator!: MatPaginator
  @ViewChild(MatSort)      sort     !: MatSort;

  getReligion() {
    this.service.get().pipe().subscribe(response => {
      this.religions        = response.religions
      this.dataSource           = new MatTableDataSource<Religion>(this.religions);
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

  viewDialog(religion: Religion): void{
    const config        = new MatDialogConfig()
    config.disableClose = true
    config.autoFocus    = true
    config.data         = religion

    this.dialog.open(ReligionViewComponent, config)
  }

  createDialog(): void {
    const config        = new MatDialogConfig()
    config.disableClose = true
    config.autoFocus    = true

    const response = this.dialog.open(ReligionCreateComponent, config)

    response.afterClosed().subscribe(data => {
      this.getReligion()
    })
  }

  updateDialog(religion: Religion): void {
    const config        = new MatDialogConfig()
    config.disableClose = true
    config.autoFocus    = true

    config.data = religion

    const response = this.dialog.open(ReligionUpdateComponent, config)

    response.afterClosed().subscribe(data => {
      this.getReligion()
      console.log("Dialog output:", data)
    })
  }

  deleteDialog(id: number): void {
    const config        = new MatDialogConfig()
    config.disableClose = true
    config.autoFocus    = true

    config.data = {'id' : id}

    const response = this.dialog.open(ReligionDeleteComponent, config)

    response.afterClosed().subscribe(data => {
      this.getReligion()
    })
  }
}

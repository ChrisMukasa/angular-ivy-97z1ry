import { Component, OnInit, ViewChild } from '@angular/core'
import { MatDialog, MatDialogConfig } from '@angular/material/dialog'
import { MatSort, Sort } from '@angular/material/sort'

import { LiveAnnouncer } from '@angular/cdk/a11y'
import { MatPaginator } from '@angular/material/paginator'
import { MatTableDataSource } from '@angular/material/table'
import { Water } from 'src/app/service/model/water.model'
import { WaterCreateComponent } from 'src/app/dialogs/water-create/water-create.component'
import { WaterDeleteComponent } from 'src/app/dialogs/water-delete/water-delete.component'
import { WaterService } from 'src/app/service/water.service'
import { WaterUpdateComponent } from 'src/app/dialogs/water-update/water-update.component'
import { WaterViewComponent } from 'src/app/dialogs/water-view/water-view.component'

@Component({
  selector: 'app-water',
  templateUrl: './water.component.html',
  styleUrls: ['./water.component.css']
})
export class WaterComponent implements OnInit {

  waters: Water[] = []
  dataSource: any

  constructor(private service: WaterService, public dialog: MatDialog, private announcer: LiveAnnouncer) { }

  ngOnInit(): void {
    this.getWater()
  }

  displayedColumns: string[] = ['id', 'designation', 'created_at', 'actions']

  @ViewChild(MatPaginator) paginator!: MatPaginator
  @ViewChild(MatSort)      sort     !: MatSort

  getWater() {
    this.service.get().pipe().subscribe(response => {
      this.waters               = response.waters
      this.dataSource           = new MatTableDataSource<Water>(this.waters)
      this.dataSource.paginator = this.paginator
      this.dataSource.sort      = this.sort
    })
  }

  performSearch(value: string) {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }
  
  sortChange(sort: Sort) {
    if (sort.direction) {
      this.announcer.announce(`Sorted ${sort.direction}ending`)
    } else {
      this.announcer.announce('Sorting cleared')
    }
  }

  viewDialog(water: Water): void{
    const config        = new MatDialogConfig()
    config.disableClose = true
    config.autoFocus    = true
    config.data         = water

    this.dialog.open(WaterViewComponent, config)
  }

  createDialog(): void {
    const config        = new MatDialogConfig()
    config.disableClose = true
    config.autoFocus    = true

    const response = this.dialog.open(WaterCreateComponent, config)

    response.afterClosed().subscribe(data => {
      this.getWater()
    })
  }

  updateDialog(water: Water): void {
    const config        = new MatDialogConfig()
    config.disableClose = true
    config.autoFocus    = true

    config.data = water

    const response = this.dialog.open(WaterUpdateComponent, config)

    response.afterClosed().subscribe(data => {
      this.getWater()
      console.log("Dialog output:", data)
    })
  }

  deleteDialog(id: number): void {
    const config        = new MatDialogConfig()
    config.disableClose = true
    config.autoFocus    = true

    config.data = {'id' : id}

    const response = this.dialog.open(WaterDeleteComponent, config)

    response.afterClosed().subscribe(data => {
      this.getWater()
    })
  }
}

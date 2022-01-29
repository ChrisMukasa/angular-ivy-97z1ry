import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSort, Sort } from '@angular/material/sort';

import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { SocialEconomicLevel } from 'src/app/service/model/social-economic-level.model';
import { SocialEconomicLevelCreateComponent } from 'src/app/dialogs/social-economic-level-create/social-economic-level-create.component';
import { SocialEconomicLevelDeleteComponent } from 'src/app/dialogs/social-economic-level-delete/social-economic-level-delete.component';
import { SocialEconomicLevelService } from 'src/app/service/social-economic-level.service';
import { SocialEconomicLevelUpdateComponent } from 'src/app/dialogs/social-economic-level-update/social-economic-level-update.component';
import { SocialEconomicLevelViewComponent } from 'src/app/dialogs/social-economic-level-view/social-economic-level-view.component';

@Component({
  selector: 'app-social-economic-level',
  templateUrl: './social-economic-level.component.html',
  styleUrls: ['./social-economic-level.component.css']
})
export class SocialEconomicLevelComponent implements OnInit {

  social_economic_levels: SocialEconomicLevel[] = []
  dataSource: any;

  constructor(private service: SocialEconomicLevelService, public dialog: MatDialog, private announcer: LiveAnnouncer) { }

  ngOnInit(): void {
    this.getSocialEconomicLevel()
  }

  displayedColumns: string[] = ['id', 'id_household', 'profession_head_of_household', 'usual_source_of_income', 'rent_amount', 'created_at', 'actions'];

  @ViewChild(MatPaginator) paginator!: MatPaginator
  @ViewChild(MatSort)      sort     !: MatSort;

  getSocialEconomicLevel() {
    this.service.get().pipe().subscribe(response => {
      this.social_economic_levels  = response.social_economic_levels
      this.dataSource           = new MatTableDataSource<SocialEconomicLevel>(this.social_economic_levels);
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

  viewDialog(social_economic_level: SocialEconomicLevel): void{
    const config        = new MatDialogConfig()
    config.disableClose = true
    config.autoFocus    = true
    config.data         = social_economic_level

    this.dialog.open(SocialEconomicLevelViewComponent, config)
  }

  createDialog(): void {
    const config        = new MatDialogConfig()
    config.disableClose = true
    config.autoFocus    = true

    const response = this.dialog.open(SocialEconomicLevelCreateComponent, config)

    response.afterClosed().subscribe(data => {
      this.getSocialEconomicLevel()
    })
  }

  updateDialog(social_economic_level: SocialEconomicLevel): void {
    const config        = new MatDialogConfig()
    config.disableClose = true
    config.autoFocus    = true

    config.data = social_economic_level

    const response = this.dialog.open(SocialEconomicLevelUpdateComponent, config)

    response.afterClosed().subscribe(data => {
      this.getSocialEconomicLevel()
      console.log("Dialog output:", data)
    })
  }

  deleteDialog(id: number): void {
    const config        = new MatDialogConfig()
    config.disableClose = true
    config.autoFocus    = true

    config.data = {'id' : id}

    const response = this.dialog.open(SocialEconomicLevelDeleteComponent, config)

    response.afterClosed().subscribe(data => {
      this.getSocialEconomicLevel()
    })
  }
}

import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSort, Sort } from '@angular/material/sort';

import { AvenueService } from 'src/app/service/avenue.service';
import { CityService } from 'src/app/service/city.service';
import { CommuneService } from 'src/app/service/commune.service';
import { DistrictService } from 'src/app/service/district.service';
import { HealthFactorService } from 'src/app/service/health-factor.service';
import { HouseholdService } from 'src/app/service/household.service';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Member } from 'src/app/service/model/member.model';
import { MemberDeleteComponent } from 'src/app/dialogs/member-delete/member-delete.component';
import { MemberService } from 'src/app/service/member.service';
import { MemberUpdateComponent } from 'src/app/dialogs/member-update/member-update.component';
import { MemberViewComponent } from 'src/app/dialogs/member-view/member-view.component';
import { PrimaryPredictionService } from 'src/app/service/primary-prediction.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  members   : Member[] = []
  member   !: Member
  dataSource: any;

  household_length! :number
  member_length   ! :number
  city_length    ! :number
  commune_length ! :number
  district_length! :number
  avenue_length  ! :number
  health_factor_length ! :number
  service_primary_prediction_length ! :number

  constructor(
    private service_household: HouseholdService,
    private service_member   : MemberService,
    private service_health_factor      : HealthFactorService,
    private service_primary_prediction : PrimaryPredictionService,
    private service_city    : CityService,
    private service_commune : CommuneService,
    private service_district: DistrictService,
    private service_avenue  : AvenueService,
    private dialog          : MatDialog,
    private announcer       : LiveAnnouncer
  ) { }

  ngOnInit(): void {
    this.getMember()
    this.getHouseholdLength()
    this.getCityLength()
    this.getCommuneLength()
    this.getDistrictLength()
    this.getAvenueLength()
    this.getMessageLength()
    this.getPaymentLength()
  }

  displayedColumns: string[] = ['id', 'fullname', 'gender', 'phone', 'created_at', 'actions'];

  @ViewChild(MatPaginator) paginator!: MatPaginator
  @ViewChild(MatSort)      sort     !: MatSort;

  getMember() {
    this.service_member.get().pipe().subscribe(response => {
      this.members              = response.members
      this.dataSource           = new MatTableDataSource<Member>(this.members);
      this.dataSource.paginator = this.paginator
      this.dataSource.sort      = this.sort;
      this.member_length        = this.members.length
    })
  }

  sortChange(sort: Sort) {
    if (sort.direction) {
      this.announcer.announce(`Sorted ${sort.direction}ending`);
    } else {
      this.announcer.announce('Sorting cleared');
    }
  }

  getHouseholdLength() {
    this.service_household.get().subscribe(response => this.household_length = response.households.length)
  }

  getCityLength() {
    this.service_city.get().subscribe(response => this.city_length = response.cities.length)
  }

  getCommuneLength() {
    this.service_commune.get().subscribe(response => this.commune_length = response.communes.length)
  }

  getDistrictLength() {
    this.service_district.get().subscribe(response => this.district_length = response.districts.length)
  }

  getAvenueLength() {
    this.service_avenue.get().subscribe(response => this.avenue_length = response.avenues.length)
  }

  getMessageLength() {
    this.service_health_factor.get().subscribe(response => this.health_factor_length = response.health_factors.length)
  }

  getPaymentLength() {
    this.service_primary_prediction.get().subscribe(response => this.service_primary_prediction_length = response.primary_predictions.length)
  }

  viewDialog(member: Member): void {
    const config        = new MatDialogConfig()
    config.disableClose = true
    config.autoFocus    = true
    config.data         = member

    this.dialog.open(MemberViewComponent, config)
  }

  updateDialog(member: Member): void {
    const config        = new MatDialogConfig()
    config.disableClose = true
    config.autoFocus    = true

    config.data = member

    const response = this.dialog.open(MemberUpdateComponent, config)

    response.afterClosed().subscribe(data => {
      this.getMember()
      console.log("Dialog output:", data)
    })
  }

  deleteDialog(id: number): void {
    const config        = new MatDialogConfig()
    config.disableClose = true
    config.autoFocus    = true

    config.data = {'id' : id}

    const response = this.dialog.open(MemberDeleteComponent, config)

    response.afterClosed().subscribe(() => {
      this.getMember()
    })
  }
}

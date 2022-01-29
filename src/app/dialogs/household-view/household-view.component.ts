import { Member } from 'src/app/service/model/member.model';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Household } from 'src/app/service/model/household.model';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatTableDataSource } from '@angular/material/table';
import { MemberService } from 'src/app/service/member.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MemberViewComponent } from '../member-view/member-view.component';
import { MemberCreateComponent } from '../member-create/member-create.component';
import { MemberDeleteComponent } from '../member-delete/member-delete.component';
import { MemberUpdateComponent } from '../member-update/member-update.component';

@Component({
  selector: 'app-household-view',
  templateUrl: './household-view.component.html',
  styleUrls: ['./household-view.component.css']
})
export class HouseholdViewComponent implements OnInit {

  household!: Household
  members   : Member[] = []
  member   !: Member
  dataSource: any;

  constructor(
    private serviceMember : MemberService,
    private dialogMember  : MatDialog,
    private announcer     : LiveAnnouncer,
    private dialog        : MatDialogRef<HouseholdViewComponent>,
    @Inject(MAT_DIALOG_DATA) data: any) {
    this.household = data
  }

  ngOnInit(): void {
    this.getMember()
  }

  displayedColumns: string[] = ['id', 'fullname', 'gender', 'dob', 'id_schooling', 'id_relationship', 'actions'];

  @ViewChild(MatPaginator) paginator!: MatPaginator
  @ViewChild(MatSort)      sort     !: MatSort;

  getMember() {
    this.serviceMember.getAllById(this.household.id).pipe().subscribe(response => {
      this.members              = response.members
      this.dataSource           = new MatTableDataSource<Member>(this.members);
      this.dataSource.paginator = this.paginator
      this.dataSource.sort      = this.sort;
    })
  }

  sortChange(sort: Sort) {
    if (sort.direction) {
      this.announcer.announce(`Sorted ${sort.direction}ending`);
    } else {
      this.announcer.announce('Sorting cleared');
    }
  }

  viewDialog(member: Member): void{
    const config        = new MatDialogConfig()
    config.disableClose = true
    config.autoFocus    = true
    config.data         = member

    this.dialogMember.open(MemberViewComponent, config)
  }

  createDialog(): void {
    const config        = new MatDialogConfig()
    config.disableClose = true
    config.autoFocus    = true

    const response = this.dialogMember.open(MemberCreateComponent, config)

    response.afterClosed().subscribe(() => this.getMember())
  }

  updateDialog(member: Member): void {
    const config        = new MatDialogConfig()
    config.disableClose = true
    config.autoFocus    = true

    config.data = member

    const response = this.dialogMember.open(MemberUpdateComponent, config)

    response.afterClosed().subscribe(data => this.getMember())
  }

  deleteDialog(id: number): void {
    const config        = new MatDialogConfig()
    config.disableClose = true
    config.autoFocus    = true

    config.data = {'id': id}

    const response = this.dialogMember.open(MemberDeleteComponent, config)

    response.afterClosed().subscribe(() => this.getMember())
  }

  close() {
    this.dialog.close();
  }
}

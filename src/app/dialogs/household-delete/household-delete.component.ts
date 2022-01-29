import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastService } from 'src/app/ng-material/toast.service';
import { HouseholdService } from 'src/app/service/household.service';

@Component({
  selector: 'app-household-delete',
  templateUrl: './household-delete.component.html',
  styleUrls: ['./household-delete.component.css']
})
export class HouseholdDeleteComponent implements OnInit {

  id !: number

  constructor(
    public service: HouseholdService,
    public dialogRef: MatDialogRef<HouseholdDeleteComponent>,
    private toast: ToastService,
    @Inject(MAT_DIALOG_DATA) data: any) {
    this.id = data.id
  }

  ngOnInit(): void { }

  delete() {
    this.service.delete(this.id).subscribe((response) => {
      this.toast.show(response)
      this.close();
    })
  }

  close() {
    this.dialogRef.close();
  }
}

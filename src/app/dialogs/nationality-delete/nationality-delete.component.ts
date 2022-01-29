import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastService } from 'src/app/ng-material/toast.service';
import { NationalityService } from 'src/app/service/nationality.service';

@Component({
  selector: 'app-nationality-delete',
  templateUrl: './nationality-delete.component.html',
  styleUrls: ['./nationality-delete.component.css']
})
export class NationalityDeleteComponent implements OnInit {

  id  !: number

  constructor(
    public service: NationalityService,
    public dialogRef: MatDialogRef<NationalityDeleteComponent>,
    private toast: ToastService,
    @Inject(MAT_DIALOG_DATA) data: any
  ) {
    this.id = data.id
  }

  ngOnInit(): void { }

  delete() {
    this.service.delete(this.id).subscribe((response) => {
      this.toast.show(response)
      this.close()
    })
  }

  close() {
    this.dialogRef.close();
  }
}

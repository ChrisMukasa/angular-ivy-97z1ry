import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastService } from 'src/app/ng-material/toast.service';
import { CommuneService } from 'src/app/service/commune.service';

@Component({
  selector: 'app-commune-delete',
  templateUrl: './commune-delete.component.html',
  styleUrls: ['./commune-delete.component.css']
})
export class CommuneDeleteComponent implements OnInit {

  id  !: number

  constructor(
    public service: CommuneService,
    private toast: ToastService,
    public dialogRef: MatDialogRef<CommuneDeleteComponent>,
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

import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastService } from 'src/app/ng-material/toast.service';
import { HealthFactorService } from 'src/app/service/health-factor.service';

@Component({
  selector: 'app-health-factor-delete',
  templateUrl: './health-factor-delete.component.html',
  styleUrls: ['./health-factor-delete.component.css']
})
export class HealthFactorDeleteComponent implements OnInit {

  id  !: number

  constructor(
    public service: HealthFactorService,
    private toast: ToastService,
    public dialogRef: MatDialogRef<HealthFactorDeleteComponent>,
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

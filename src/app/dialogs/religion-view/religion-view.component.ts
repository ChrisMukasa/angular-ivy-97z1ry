import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Religion } from 'src/app/service/model/religion.model';

@Component({
  selector: 'app-religion-view',
  templateUrl: './religion-view.component.html',
  styleUrls: ['./religion-view.component.css']
})
export class ReligionViewComponent implements OnInit {

  religion!: Religion

  constructor(private dialog: MatDialogRef<ReligionViewComponent>, @Inject(MAT_DIALOG_DATA) data: any) {
    this.religion = data
  }

  ngOnInit(): void {}

  close() {
    this.dialog.close();
  }
}

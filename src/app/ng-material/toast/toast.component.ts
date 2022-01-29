import { Component, Inject, OnInit } from '@angular/core';
import { MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent implements OnInit {

  constructor(public sbRef: MatSnackBarRef<ToastComponent>, @Inject(MAT_SNACK_BAR_DATA) public data: any ) {}

  ngOnInit(): void {}
}

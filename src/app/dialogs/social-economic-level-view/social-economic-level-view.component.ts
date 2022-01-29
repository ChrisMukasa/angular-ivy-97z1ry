import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SocialEconomicLevel } from 'src/app/service/model/social-economic-level.model';

@Component({
  selector: 'app-social-economic-level-view',
  templateUrl: './social-economic-level-view.component.html',
  styleUrls: ['./social-economic-level-view.component.css']
})
export class SocialEconomicLevelViewComponent implements OnInit {

  social_economic_level!: SocialEconomicLevel

  constructor(private dialog: MatDialogRef<SocialEconomicLevelViewComponent>, @Inject(MAT_DIALOG_DATA) data: any) {
    this.social_economic_level = data
  }

  ngOnInit(): void {}

  close() {
    this.dialog.close();
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { ToastService } from 'src/app/ng-material/toast.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  form !: FormGroup;
  hide = true;

  phone    !: string
  password !: string

  constructor(
    public service  : UserService,
    public router   : Router,
    private builder : FormBuilder,
    private toast   : ToastService) {}

  ngOnInit(): void {
    this.form = this.builder.group({
      phone   : [this.phone   , [Validators.required, Validators.minLength(10), Validators.maxLength(13)]],
      password: [this.password, [Validators.required, Validators.minLength(6)]],
    });
  }

  signIn() {
    console.table(this.form.value);
    this.service.signIn(this.form.value).pipe().subscribe((response) => {
      if (response.error === false) {
        this.toast.show(response)
        this.router.navigate(['dashboard'])
      } else {
        this.toast.show(response)
      }
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { CustomValidators } from '../../validators/noSpaceAllowed.validator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  formdata: any = {};

  loginForm: FormGroup;
  constructor(private router: Router) {}
  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [
        Validators.required,
        CustomValidators.noSpaceAllowed,
        Validators.email,
      ]),
      password: new FormControl(null, [
        Validators.required,
        CustomValidators.noSpaceAllowed,
      ]),
    });
  }

  onClickSignup() {
    this.router.navigate(['/signup']);
  }

  onClickForgotPassword() {
    this.router.navigate(['/forgotPassword']);
  }

  OnFormSubmitted() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
    } else {
      console.error('Invalid Form');
      this.resetLoginForm();
    }
  }

  resetLoginForm() {
    this.loginForm.reset({
      email: null,
      password: null,
    });
  }
}

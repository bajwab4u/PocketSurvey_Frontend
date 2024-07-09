import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { CustomValidators } from '../../validators/noSpaceAllowed.validator';
import { Router } from '@angular/router';
import { AuthApiService } from '../../services/auth.services';
import { ApiResponseInterface } from '../../../shared/models/api.models';

@Component({
  selector: 'app-forgot-password',
  standalone: false,
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss',
})
export class ForgotPasswordComponent implements OnInit {
  formdata: any = {};

  forgotPasswordForm: FormGroup;

  isLoading: boolean = false;
  constructor(private router: Router, private authApiService: AuthApiService) {}
  ngOnInit() {
    this.forgotPasswordForm = new FormGroup({
      email: new FormControl(null, [
        Validators.required,
        CustomValidators.noSpaceAllowed,
        Validators.email,
      ]),
    });
  }

  onClickSignup() {
    this.router.navigate(['/signup']);
  }

  OnFormSubmitted() {
    if (this.forgotPasswordForm.valid) {
      const data  = this.forgotPasswordForm.value;
     
      this.isLoading = true;
      this.authApiService.sendResetPasswordLink(data).subscribe(
        (response: ApiResponseInterface<any>) => {
          // Handle successful response
          console.log('Reset password link sent successfully:', response);
          // Optionally, display a success message to the user
        },
        (error) => {
          // Handle error response
          console.error('Failed to send reset password link:', error);
          // Optionally, display an error message to the user
        },
        () => {
          this.resetLoginForm();
          this.isLoading = false;
        }
      );
    } else {
      console.error('Invalid Form');
      this.resetLoginForm();
    }
  }

  resetLoginForm() {
    this.forgotPasswordForm.reset({
      email: null,
    });
  }

  onClickBack() {
    this.router.navigate(['/']);
  }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { CustomValidators } from '../../validators/noSpaceAllowed.validator';
import { Router } from '@angular/router';
import { AuthApiService } from '../../services/auth.services';
import { ApiResponseInterface } from '../../../shared/models/api.models';

@Component({
  selector: 'app-verify-otp',
  standalone: false,
  templateUrl: './verify-otp.component.html',
  styleUrl: './verify-otp.component.scss',
})
export class VerifyOtpComponent {
  formdata: any = {};

  verifyOtpForm: FormGroup;

  isLoading: boolean = false;
  constructor(private router: Router, private authApiService: AuthApiService) {}
  ngOnInit() {
    this.verifyOtpForm = new FormGroup({
      otp: new FormControl(null, [
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
    if (this.verifyOtpForm.valid) {
      const email = this.verifyOtpForm.get('email').value;
      this.isLoading = true;
      this.authApiService.sendResetPasswordLink(email).subscribe(
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
    this.verifyOtpForm.reset({
      otp: null,
    });
  }

  onClickBack() {
    this.router.navigate(['/']);
  }
}

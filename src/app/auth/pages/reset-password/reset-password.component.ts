import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { CustomValidators } from '../../validators/noSpaceAllowed.validator';
import { Router } from '@angular/router';
import { AuthApiService } from '../../services/auth.services';
import { ActivatedRoute } from '@angular/router';
import { ApiResponseInterface } from '../../../shared/models/api.models';

@Component({
  selector: 'app-reset-password',
  standalone: false,
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss',
})
export class ResetPasswordComponent implements OnInit {
  formdata: any = {};
  token: any;
  resetPasswordForm: FormGroup;

  isLoading: boolean = false;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authApiService: AuthApiService
  ) {}
  ngOnInit() {
    this.token = this.route.snapshot.queryParamMap.get('token');
    console.log(`Token ${this.token}`);
    this.resetPasswordForm = new FormGroup({
      password: new FormControl(null, [
        Validators.required,
        CustomValidators.noSpaceAllowed,
      ]),
      confirmPassword: new FormControl(null, [
        Validators.required,
        CustomValidators.noSpaceAllowed,
      ]),
    });
  }

  OnFormSubmitted() {
    if (!this.token) {
      console.log('Reset Password Session Expired');
    }
    if (this.resetPasswordForm.valid) {
      const data = this.resetPasswordForm.value;
      this.isLoading = true;
      this.authApiService.resetPassword(data, this.token).subscribe(
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
    this.resetPasswordForm.reset({
      password: null,
      confirmPassword: null,
    });
  }

  onClickBack() {
    this.router.navigate(['/']);
  }
}

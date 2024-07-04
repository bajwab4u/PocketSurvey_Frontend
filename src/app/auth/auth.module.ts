import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { OrganizationSignupComponent } from './pages/organization-signup/organization-signup.component';
import { VerifyOtpComponent } from './pages/verify-otp/verify-otp.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RootSharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    LoginComponent,
    OrganizationSignupComponent,
    VerifyOtpComponent,
    ResetPasswordComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    RootSharedModule
  ]
})
export class AuthModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { OrganizationSignupComponent } from './pages/organization-signup/organization-signup.component';
import { VerifyOtpComponent } from './pages/verify-otp/verify-otp.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RootSharedModule } from '../shared/shared.module';
import { AuthComponent } from './auth.component';
import { AuthApiService } from './services/auth.services';
import { HttpClientModule } from '@angular/common/http';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';

@NgModule({
  declarations: [
    LoginComponent,
    OrganizationSignupComponent,
    VerifyOtpComponent,
    ForgotPasswordComponent,
    AuthComponent,
    ResetPasswordComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    RootSharedModule,
    HttpClientModule,
  ],
  bootstrap: [],
  providers: [AuthApiService],
})
export class AuthModule {}

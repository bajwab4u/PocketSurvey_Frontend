import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { OrganizationSignupComponent } from './pages/organization-signup/organization-signup.component';
import { VerifyOtpComponent } from './pages/verify-otp/verify-otp.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
	{ path: 'signup', component: OrganizationSignupComponent },
	{ path: 'verifyOtp', component: VerifyOtpComponent },
	{ path: 'resetPassword', component: ResetPasswordComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }

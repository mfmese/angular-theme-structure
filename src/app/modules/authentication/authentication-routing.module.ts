import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignInComponent } from './sign-in/sign-in.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { SignupComponent } from './sign-up/sign-up.component';

const routes: Routes = [
{
  path: 'signin',
  component: SignInComponent,
  data: { title: 'Log In' }
},
{
  path: 'signup',
  component: SignupComponent,
  data: { title: 'Register' }
},
{
  path: 'forgot-password',
  component: ForgotPasswordComponent,
  data: { title: 'Forgot Password' }
},
{
  path: 'reset-password/:resetToken',
  component: ResetPasswordComponent,
  data: { title: 'Reset password' }
},
{
  path: '404',
  component: NotFoundComponent,
  data: { title: '404' }
},
{
  path: '403',
  component: ForbiddenComponent,
  data: { title: '404' }
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {
  static components = [
    SignInComponent,
    SignupComponent,
    ForgotPasswordComponent,
    NotFoundComponent,
    ResetPasswordComponent,
    ForbiddenComponent
  ];

}

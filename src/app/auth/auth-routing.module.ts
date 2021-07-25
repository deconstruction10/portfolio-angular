import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {RegisterComponent} from "./register/register.component";
import {LoginComponent} from "./login/login.component";
import {ResetPasswordComponent} from "./reset-password/reset-password.component";

const routes: Routes = [
  {path: '', redirectTo: 'register', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'register', component: RegisterComponent},
  {path: 'reset-password', component: ResetPasswordComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes), RouterModule],
  exports: []
})
export class AuthRoutingModule { }

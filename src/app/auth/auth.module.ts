import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import {ShowHidePasswordModule} from "ngx-show-hide-password";
import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    ResetPasswordComponent
  ],
  exports: [
    RegisterComponent,
    LoginComponent,
    ResetPasswordComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    ShowHidePasswordModule,

  ]
})
export class AuthModule { }

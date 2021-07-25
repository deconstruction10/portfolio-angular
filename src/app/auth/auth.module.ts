import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AuthRoutingModule } from './auth-routing.module';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import {ShowHidePasswordModule} from "ngx-show-hide-password";
import {RouterModule} from "@angular/router";


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
    CommonModule,
    RouterModule,
    AuthRoutingModule,
    FontAwesomeModule,
    ShowHidePasswordModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AuthModule { }

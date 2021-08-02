import { Component, OnInit } from '@angular/core';
import {FaIconLibrary} from "@fortawesome/angular-fontawesome";
import {faEyeSlash} from "@fortawesome/free-solid-svg-icons";
import {MatDialog} from "@angular/material/dialog";
import {ResetPasswordComponent} from "../reset-password/reset-password.component";
import {RegisterComponent} from "../register/register.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  faEyeSlash = faEyeSlash;
  constructor(private library: FaIconLibrary, private dialog: MatDialog) {
    library.addIcons(faEyeSlash);
  }

  ngOnInit(): void {
  }

  openResetModal() {
    this.dialog.closeAll();
    this.dialog.open(ResetPasswordComponent);
  }

  openRegisterModal() {
    this.dialog.closeAll();
    this.dialog.open(RegisterComponent);
  }

}

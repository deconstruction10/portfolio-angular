import { Component, OnInit } from '@angular/core';
import {FaIconLibrary} from "@fortawesome/angular-fontawesome";
import {faEyeSlash, faEnvelopeOpen} from "@fortawesome/free-regular-svg-icons";
import {MatDialog} from "@angular/material/dialog";
import {LoginComponent} from "../login/login.component";
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  faEnvelopeOpen = faEnvelopeOpen;
  constructor(private library: FaIconLibrary, private dialog: MatDialog) {
    library.addIcons(faEyeSlash, faEnvelopeOpen)
  }

  ngOnInit(): void {

  }

  openRegisterModal() {
    this.dialog.closeAll();
    this.dialog.open(LoginComponent);
  }
}

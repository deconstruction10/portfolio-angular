import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FaIconLibrary} from "@fortawesome/angular-fontawesome";
import {faEyeSlash} from "@fortawesome/free-solid-svg-icons";
import {MatDialog} from "@angular/material/dialog";
import {ResetPasswordComponent} from "../reset-password/reset-password.component";
import {RegisterComponent} from "../register/register.component";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('emailInput', {static: false}) emailInput!: ElementRef;
  @ViewChild('passwordInput', {static: false}) passwordInput!: ElementRef;
  @ViewChild('signUpBtn', {static: false}) signUpBtn!: ElementRef;
  loginForm!: FormGroup;
  faEyeSlash = faEyeSlash;
  withError = false;

  constructor(private library: FaIconLibrary,
              private dialog: MatDialog,
              private fb: FormBuilder) {
    library.addIcons(faEyeSlash);
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group(
      {
        email:  new FormControl('',
          Validators.compose(
          [
            Validators.minLength(6),
            Validators.required
          ]
        )),
        password:
          new FormControl('',
            Validators.compose(
            [
              Validators.minLength(6),
              Validators.required
            ]
          ))
        // terms: new FormControl('',
        //   [
        //       Validators.requiredTrue
        //   ])
      }
    )
  }

  handleEmailInput(event: KeyboardEvent) {
    if (event.code === 'Enter' || event.code === 'NumpadEnter') {
      this.passwordInput.nativeElement.focus();
    }
  }

  handlePasswordInput(event: KeyboardEvent) {
    if (event.code === 'Enter' || event.code === 'NumpadEnter') {
      this.signUpBtn.nativeElement.focus();
    }
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  showErrorMessage() {
    if (this.email?.errors || this.password?.errors) {
      this.withError = true;
      setTimeout(() => {
        this.withError = false;
      }, 2000);
    }
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

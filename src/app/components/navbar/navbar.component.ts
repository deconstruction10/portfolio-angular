import {AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {fromEvent} from "rxjs";
import {FromEventTarget} from "rxjs/internal/observable/fromEvent";
import {MatDialog} from "@angular/material/dialog";
import {RegisterComponent} from "../../auth/register/register.component";
import {LoginComponent} from "../../auth/login/login.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, AfterViewInit {

  constructor(private dialog: MatDialog, private router: Router) { }

  ngAfterViewInit(): void {

  }

  ngOnInit(): void {

  }

  openRegisterDialog() {
    let dialogRef = this.dialog.open(RegisterComponent, {
      width: '1400px',
    });
  }

  openSignInDialog() {
    let dialogRef = this.dialog.open(LoginComponent, {
      width: '500px',
    });
  }
}

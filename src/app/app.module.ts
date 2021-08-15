import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthModule} from "./auth/auth.module";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { NavbarComponent } from './components/navbar/navbar.component';
import {MatDialogModule} from "@angular/material/dialog";
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ServicesComponent } from './components/services/services.component';
import { ClientsComponent } from './components/clients/clients.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { LanguageComponent } from './components/language/language.component';
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutUsComponent,
    ServicesComponent,
    ClientsComponent,
    PricingComponent,
    LanguageComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AuthModule,
    FontAwesomeModule,
    AppRoutingModule,
    MatDialogModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

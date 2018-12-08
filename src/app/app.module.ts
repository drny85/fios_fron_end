import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NavbarComponent } from "./components/navbar/navbar.component";
import {
  MatToolbarModule,
  MatSelectModule,
  MatInputModule,
  MatFormFieldModule,
  MatDatepickerModule,
  MatNativeDateModule
} from "@angular/material";
import { FormsModule } from "@angular/forms";
import { HomeComponent } from "./components/home/home.component";
import { AddReferralComponent } from "./components/referrals/add-referral/add-referral.component";
import { FooterComponent } from "./components/footer/footer.component";
import { AllreferralsComponent } from "./components/referrals/allreferrals/allreferrals.component";
import { DetailComponent } from './components/referrals/detail/detail.component';
import { EditComponent } from './components/referrals/edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AddReferralComponent,
    FooterComponent,
    AllreferralsComponent,
    DetailComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

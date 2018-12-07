import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { MatToolbarModule, MatSelectModule } from "@angular/material";
import { FormsModule } from "@angular/forms";
import { HomeComponent } from "./components/home/home.component";
import { AddReferralComponent } from "./components/referrals/add-referral/add-referral.component";
import { FooterComponent } from "./components/footer/footer.component";
import { AllreferralsComponent } from './components/referrals/allreferrals/allreferrals.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AddReferralComponent,
    FooterComponent,
    AllreferralsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSelectModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

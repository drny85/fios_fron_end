import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NavbarComponent } from "./components/navbar/navbar.component";
import {
  MatToolbarModule,
  MatSelectModule,
  MatInputModule,
  MatFormFieldModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatProgressSpinnerModule,
  MatCardModule,
  MatTableModule,
  MatPaginator,
  MatIconModule,
  MatPaginatorModule,
  MatSort,
  MatSortModule
} from "@angular/material";
import { FormsModule } from "@angular/forms";
import { HomeComponent } from "./components/home/home.component";
import { AddReferralComponent } from "./components/referrals/add-referral/add-referral.component";
import { FooterComponent } from "./components/footer/footer.component";
import { AllreferralsComponent } from "./components/referrals/allreferrals/allreferrals.component";
import { DetailComponent } from "./components/referrals/detail/detail.component";
import { EditComponent } from "./components/referrals/edit/edit.component";
import { AllReferresComponent } from "./components/referees/all-referres/all-referres.component";
import { RefereeDetailsComponent } from "./components/referees/referee-details/referee-details.component";
import { TodayComponent } from "./components/today/today.component";
import { RefereeServiceService } from "./services/referee/referee-service.service";
import { ReferralService } from "src/app/services/referral/referral.service";
import { RefereeEditComponent } from "./components/referees/referee-edit/referee-edit.component";
import { MyreferralsComponent } from "./components/referrals/myreferrals/myreferrals.component";
import { LoginComponent } from "./components/users/login/login.component";
import { ProfileComponent } from "./components/users/profile/profile.component";
import { RegisterComponent } from "./components/users/register/register.component";
import { AuthService } from "./services/auth/auth.service";
import { AddRefereeComponent } from "./components/referees/add-referee/add-referee.component";
import { AddManagerComponent } from "./components/managers/add-manager/add-manager.component";
import { ManagerDetailsComponent } from "./components/managers/manager-details/manager-details.component";
import { ManagerEditComponent } from "./components/managers/manager-edit/manager-edit.component";
import { AllManagersComponent } from "./components/managers/all-managers/all-managers.component";

import { AuthInterceptor } from "./services/intercector.service";
import { AllusersComponent } from "./components/users/allusers/allusers.component";
import { UserDetailComponent } from "./components/users/user-detail/user-detail.component";
import { UserEditComponent } from "./components/users/user-edit/user-edit.component";
import { NotesComponent } from "./components/notes/notes.component";
import { EditNoteComponent } from "./components/edit-note/edit-note.component";
import { NightlyReportComponent } from "./components/nightly-report/nightly-report.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AddReferralComponent,
    FooterComponent,
    AllreferralsComponent,
    DetailComponent,
    EditComponent,
    AllReferresComponent,
    RefereeDetailsComponent,
    TodayComponent,
    RefereeEditComponent,
    MyreferralsComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    AddRefereeComponent,
    AddManagerComponent,
    ManagerDetailsComponent,
    ManagerEditComponent,
    AllManagersComponent,
    AllusersComponent,
    UserDetailComponent,
    UserEditComponent,
    NotesComponent,
    EditNoteComponent,
    NightlyReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSelectModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatIconModule,
    MatPaginatorModule,
    MatSortModule,
    FormsModule
  ],
  providers: [
    RefereeServiceService,
    ReferralService,
    AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

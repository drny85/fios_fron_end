import { MyreferralsComponent } from "./components/referrals/myreferrals/myreferrals.component";
import { AllReferresComponent } from "./components/referees/all-referres/all-referres.component";
import { DetailComponent } from "./components/referrals/detail/detail.component";
import { AddReferralComponent } from "./components/referrals/add-referral/add-referral.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { AllreferralsComponent } from "./components/referrals/allreferrals/allreferrals.component";
import { EditComponent } from "./components/referrals/edit/edit.component";
import { RefereeDetailsComponent } from "./components/referees/referee-details/referee-details.component";
import { TodayComponent } from "./components/today/today.component";
import { RefereeEditComponent } from "./components/referees/referee-edit/referee-edit.component";
import { RegisterComponent } from "./components/users/register/register.component";
import { LoginComponent } from "./components/users/login/login.component";
import { ProfileComponent } from "./components/users/profile/profile.component";
import { AddRefereeComponent } from "./components/referees/add-referee/add-referee.component";
import { AddManagerComponent } from "./components/managers/add-manager/add-manager.component";
import { AllManagersComponent } from "./components/managers/all-managers/all-managers.component";
import { ManagerEditComponent } from "./components/managers/manager-edit/manager-edit.component";
import { ManagerDetailsComponent } from "./components/managers/manager-details/manager-details.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "referrals", component: AllreferralsComponent },
  { path: "add-referral", component: AddReferralComponent },
  { path: "detail/:id", component: DetailComponent },
  { path: "referral/edit/:id", component: EditComponent },
  { path: "myreferrals/:id", component: MyreferralsComponent },
  { path: "referee/all-referees", component: AllReferresComponent },
  { path: "referee/add-referee", component: AddRefereeComponent },
  { path: "referee/details/:id", component: RefereeDetailsComponent },
  { path: "referee/edit/:id", component: RefereeEditComponent },
  { path: "user/register", component: RegisterComponent },
  { path: "user/login", component: LoginComponent },
  { path: "user/profile", component: ProfileComponent },
  { path: "today", component: TodayComponent },

  { path: "login", component: LoginComponent },

  { path: "manager/add-manager", component: AddManagerComponent },
  { path: "manager/all-managers", component: AllManagersComponent },
  { path: "manager/edit/:id", component: ManagerEditComponent },
  { path: "manager/details", component: ManagerDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

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
import { AllusersComponent } from "./components/users/allusers/allusers.component";
import { UserDetailComponent } from "./components/users/user-detail/user-detail.component";
import { AdminGuard } from "./guards/admin.guard";
import { ActiveGuard } from "./guards/active.guard";
import { UserEditComponent } from "./components/users/user-edit/user-edit.component";
import { NotesComponent } from "./components/notes/notes.component";
import { EditNoteComponent } from "./components/edit-note/edit-note.component";

const routes: Routes = [
  { path: "", component: HomeComponent, canActivate: [ActiveGuard] },
  {
    path: "referrals",
    component: AllreferralsComponent,
    canActivate: [ActiveGuard]
  },
  {
    path: "add-referral",
    component: AddReferralComponent,
    canActivate: [ActiveGuard]
  },
  {
    path: "detail/:id",
    component: DetailComponent,
    canActivate: [ActiveGuard]
  },
  {
    path: "referral/edit/:id",
    component: EditComponent,
    canActivate: [ActiveGuard]
  },
  {
    path: "myreferrals/:id",
    component: MyreferralsComponent,
    canActivate: [ActiveGuard]
  },
  {
    path: "referee/all-referees",
    component: AllReferresComponent,
    canActivate: [ActiveGuard]
  },
  {
    path: "referee/add-referee",
    component: AddRefereeComponent,
    canActivate: [ActiveGuard]
  },
  {
    path: "referee/details/:id",
    component: RefereeDetailsComponent,
    canActivate: [ActiveGuard]
  },
  {
    path: "referee/edit/:id",
    component: RefereeEditComponent,
    canActivate: [ActiveGuard]
  },
  { path: "user/register", component: RegisterComponent },
  { path: "user/login", component: LoginComponent },
  {
    path: "user/profile",
    component: ProfileComponent,
    canActivate: [ActiveGuard]
  },
  {
    path: "user/detail/:id",
    component: UserDetailComponent,
    canActivate: [ActiveGuard]
  },
  {
    path: "user/all",
    component: AllusersComponent,
    canActivate: [AdminGuard]
  },
  {
    path: "user/edit/:id",
    component: UserEditComponent,
    canActivate: [ActiveGuard]
  },
  { path: "today", component: TodayComponent, canActivate: [ActiveGuard] },

  {
    path: "manager/add-manager",
    component: AddManagerComponent,
    canActivate: [ActiveGuard]
  },
  {
    path: "manager/all-managers",
    component: AllManagersComponent,
    canActivate: [ActiveGuard]
  },
  {
    path: "manager/edit/:id",
    component: ManagerEditComponent,
    canActivate: [ActiveGuard]
  },
  {
    path: "manager/details",
    component: ManagerDetailsComponent,
    canActivate: [ActiveGuard]
  },
  { path: "notes", component: NotesComponent, canActivate: [ActiveGuard] },
  {
    path: "notes/:id",
    component: EditNoteComponent,
    canActivate: [ActiveGuard]
  },

  { path: "**", redirectTo: "home" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

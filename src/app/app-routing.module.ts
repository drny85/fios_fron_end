import { DetailComponent } from "./components/referrals/detail/detail.component";
import { AddReferralComponent } from "./components/referrals/add-referral/add-referral.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { AllreferralsComponent } from "./components/referrals/allreferrals/allreferrals.component";
import { EditComponent } from "./components/referrals/edit/edit.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "referrals", component: AllreferralsComponent },
  { path: "add-referral", component: AddReferralComponent },
  { path: "detail/:id", component: DetailComponent },
  { path: "referral/edit/:id", component: EditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

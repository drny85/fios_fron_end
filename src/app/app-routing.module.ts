import { AddReferralComponent } from "./components/referrals/add-referral/add-referral.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { AllreferralsComponent } from "./components/referrals/allreferrals/allreferrals.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "referrals", component: AllreferralsComponent },
  { path: "add-referral", component: AddReferralComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

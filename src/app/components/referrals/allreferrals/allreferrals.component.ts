import { Component, OnInit } from "@angular/core";
import { Referral } from "src/app/models/referral.model";
import { ReferralService } from "../../../services/referral/referral.service";

@Component({
  selector: "app-allreferrals",
  templateUrl: "./allreferrals.component.html",
  styleUrls: ["./allreferrals.component.css"]
})
export class AllreferralsComponent implements OnInit {
  referrals: Referral[] = [];

  constructor(private referralServ: ReferralService) {}

  ngOnInit() {
    this.getReferrals();
  }

  getReferrals() {
    this.referralServ.getReferrals().subscribe(referrals => {
      this.referrals = referrals;
      console.log(referrals);
    });
  }
}

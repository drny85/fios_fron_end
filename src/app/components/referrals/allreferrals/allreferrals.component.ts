import { Component, OnInit } from "@angular/core";
import { Referral } from "src/app/models/referral.model";
import { ReferralService } from "../../../services/referral/referral.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-allreferrals",
  templateUrl: "./allreferrals.component.html",
  styleUrls: ["./allreferrals.component.css"]
})
export class AllreferralsComponent implements OnInit {
  referrals: Referral[] = [];
  sorted: Referral[] = [];
  status: string;

  constructor(
    private referralServ: ReferralService,
    private actidedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getReferrals();
  }

  getReferrals() {
    this.referralServ.getReferrals().subscribe(referrals => {
      this.sorted = referrals;
      this.actidedRoute.queryParamMap.subscribe(params => {
        this.status = params.get("status");
        if (
          this.status === "" ||
          this.status == null ||
          this.status === "undefined"
        ) {
          this.referrals = referrals;
        } else {
          this.referrals = this.sorted.filter(
            ref => ref.status === this.status
          );
        }
      });
    });
  }
}

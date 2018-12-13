import { Component, OnInit } from "@angular/core";
import { Referral } from "../../../models/referral.model";
import { ReferralService } from "../../../services/referral/referral.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-myreferrals",
  templateUrl: "./myreferrals.component.html",
  styleUrls: ["./myreferrals.component.css"]
})
export class MyreferralsComponent implements OnInit {
  referrals: Referral[] = [];
  allreferrals: Referral[] = [];
  id: string;
  status: string = "";

  constructor(
    private referralServ: ReferralService,
    private activedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getReferrals();
  }

  getReferrals() {
    this.id = this.activedRoute.snapshot.params["id"];
    this.referralServ.getReferralsById(this.id).subscribe(referrals => {
      this.allreferrals = referrals;
      this.activedRoute.queryParamMap.subscribe(params => {
        this.status = params.get("status");
        console.log(this.status);
        this.referrals = this.status
          ? this.allreferrals.filter(s => s.status === this.status)
          : this.allreferrals;
      });
    });
  }
}

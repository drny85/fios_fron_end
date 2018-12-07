import { Component, OnInit } from "@angular/core";
import { ReferralService } from "../../../services/referral/referral.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Referral } from "src/app/models/referral.model";

@Component({
  selector: "app-detail",
  templateUrl: "./detail.component.html",
  styleUrls: ["./detail.component.css"]
})
export class DetailComponent implements OnInit {
  referral: Referral;
  id: string;

  constructor(
    private refServ: ReferralService,
    private router: Router,
    private activedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getReferral();
  }

  getReferral() {
    this.id = this.activedRoute.snapshot.params["id"];
    this.refServ.getReferral(this.id).subscribe(referral => {
      this.referral = referral.referral;
    });
  }
}

import { Component, OnInit } from "@angular/core";
import { ReferralService } from "../../services/referral/referral.service";
import { Referral } from "../../models/referral.model";
import { map } from "rxjs/operators";

@Component({
  selector: "app-today",
  templateUrl: "./today.component.html",
  styleUrls: ["./today.component.css"]
})
export class TodayComponent implements OnInit {
  days = {
    0: "sunday",
    1: "monday",
    2: "tuesday",
    3: "wednesday",
    4: "thursday",
    5: "friday",
    6: "saturday"
  };
  dateObject = new Date();
  todayDay = this.days[this.dateObject.getUTCDay()];
  todayDate = this.dateObject.toLocaleDateString();
  timeNow = this.dateObject.toLocaleTimeString();
  rightNow;

  referrals: Referral[] = [];

  loading = false;

  constructor(private referralServ: ReferralService) {}

  ngOnInit() {
    this.getReferrals();
  }

  move(e: HTMLDivElement) {
    e.setAttribute("class", "animated flash");
    e.remove();
  }

  getReferrals() {
    this.loading = true;
    this.referralServ.getReferrals().subscribe(referrals => {
      this.referrals = referrals;
      this.loading = false;
      console.log(this.referrals);
    });
  }
}

import { Units } from "./../../models/units.model";
import { Component, OnInit } from "@angular/core";
import { ReferralService } from "../../services/referral/referral.service";
import { Referral } from "../../models/referral.model";
import { map } from "rxjs/operators";
import { Router } from "@angular/router";
import * as moment from "moment";

@Component({
  selector: "app-today",
  templateUrl: "./today.component.html",
  styleUrls: ["./today.component.css"]
})
export class TodayComponent implements OnInit {
  todayUnits: number = 0;
  today = moment()
    .format()
    .split("T")[0];
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

  showInfo = false;

  referrals: Referral[] = [];

  loading = false;

  constructor(private referralServ: ReferralService, private router: Router) {}

  ngOnInit() {
    this.getReferrals();
    this.getTodayOrders();
  }

  getReferrals() {
    this.loading = true;
    this.todayUnits = 0;
    this.referralServ.getReferrals().subscribe(referrals => {
      this.referrals = referrals;
      this.loading = false;
      // create an array of all referrals
      let u = new Units(referrals);
      // create an sub array wit only today referrals closed.
      let units = new Units(u.todayUnitsArray);
      // assign total unit total from sub-array.
      this.todayUnits = units.totalUnits;
    });
  }

  getTodayOrders() {
    let day = this.dateObject.getDay();
    let month = this.dateObject.getMonth() + 1;
    let year = this.dateObject.getFullYear();
    let today = year + "-" + month + "-" + day;

    // let todaySales = [...this.referrals];
    // todaySales.filter(ref => ref.order_date === this.todayDate);
    this.referralServ.getReferralsByDates({start: new Date(), end: new Date()}).subscribe(referrals => this.referrals = referrals);
  }

  goToNotes() {
    this.router.navigate(["notes"]);
  }
}

import { Units } from './../../models/units.model';
import { Component, OnInit } from "@angular/core";
import { ReferralService } from "../../services/referral/referral.service";
import { Referral } from "../../models/referral.model";
import { map } from "rxjs/operators";
import { Router } from "@angular/router";
import * as moment from 'moment';

@Component({
  selector: "app-today",
  templateUrl: "./today.component.html",
  styleUrls: ["./today.component.css"]
})
export class TodayComponent implements OnInit {
  todayUnits:number;
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
      let units = new Units(referrals.filter(ref => ref.status === "closed" &&
      ref.order_date.split("T")[0] === this.today));
      this.todayUnits = units.totalUnits;
    });
   
    
    

    
  }

  getTodayOrders() {
    let day = this.dateObject.getDay();
    let month = this.dateObject.getMonth() + 1;
    let year = this.dateObject.getFullYear();
    let today = year + "-" + month + "-" + day;

    let todaySales = [...this.referrals];
    todaySales.filter(ref => ref.order_date === this.todayDate);
  }

  goToNotes() {
    this.router.navigate(["notes"]);
  }
}

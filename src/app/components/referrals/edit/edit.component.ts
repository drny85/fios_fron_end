import { Component, OnInit } from "@angular/core";
import { ReferralService } from "../../../services/referral/referral.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Referral } from "../../../models/referral.model";
import { Referee } from "src/app/models/referee.model";
import { RefereeServiceService } from "../../../services/referee/referee-service.service";
import { NgForm } from "@angular/forms";
import { Manager } from "../../../models/manager.model";
import { ManagerService } from "../../../services/manager/manager.service";
import { User } from "../../../models/user.model";
import { AuthService } from "../../../services/auth/auth.service";
import * as moment from "moment";

declare let M: any;

@Component({
  selector: "app-edit",
  templateUrl: "./edit.component.html",
  styleUrls: ["./edit.component.css"]
})
export class EditComponent implements OnInit {
  id: string;
  user: User;
  managers: Manager[];
  referees: Referee[];
  referral: Referral = {
    name: "",
    last_name: "",

    address: "",
    apt: "",
    city: "",
    zipcode: "",

    phone: "",
    mon: "",
    due_date: "",
    package: "",
    order_date: "",
    email: "",
    status: "",
    manager: "",
    moveIn: "",
    referralBy: "",
    comment: "",
    updated: ""
  };

  constructor(
    private refServ: ReferralService,
    private activedRoute: ActivatedRoute,
    private refereeServ: RefereeServiceService,
    private router: Router,
    private authServ: AuthService,
    private managerServ: ManagerService
  ) {}

  ngOnInit() {
    this.getReferees();
    this.getReferral();
    this.getManagers();
    this.getSignedInUser();

    // M.toast({ html: "I am a toast!" });
  }

  getReferral() {
    this.id = this.activedRoute.snapshot.params["id"];
    this.refServ.getReferral(this.id).subscribe(referral => {
      this.referral = referral;
      console.log(referral);
    });
  }

  getManagers() {
    this.managerServ.getManagers().subscribe(managers => {
      this.managers = managers;
    });
  }

  getSignedInUser() {
    let userId = localStorage.getItem("userId");
    if (userId) {
      this.authServ.getUserById(userId).subscribe(user => {
        this.user = user;
        console.log("Signed:", this.user);
      });
    }
  }
  getReferees() {
    this.refereeServ.getReferees().subscribe(referees => {
      this.referees = referees;
      console.log(referees);
    });
  }

  onSubmit(e: NgForm) {
    this.referral.updated = moment().format("MMMM Do YYYY, h:mm:ss a");
    // this.referral.coach = this.user.coach._id;
    this.refServ.updateReferral(this.referral).subscribe(ref => {
      if (ref) {
        e.reset();
        this.router.navigate([`detail/${this.referral._id}`]);
        M.toast({ html: "Referral Updated!", displayLength: 2000 });
        if (ref.status === "closed" && ref.referralBy !== "me") {
          M.toast({
            html: "Great job on closing that sale!",
            classes: "teal",
            displayLength: 6000
          });
        }
      }
    });
  }

  checkIn(e) {
    console.log(e.value);
    console.log(moment(e.value).format("L"));
  }

  formatPhone(obj) {
    let numbers = obj.value;
    let x = obj.value;

    numbers.replace(/\D/g, "");
    let char = {
      0: "(",
      3: ") ",
      6: "-"
    };
    x = "";
    for (let i = 0; i < numbers.length; i++) {
      x += (char[i] || "") + numbers[i];
    }
    this.referral.phone = x;
  }

  populateCity(e: NgForm) {
    let v = e.value;
    if (v.length >= 3) {
      if (v === "104") {
        this.referral.city = "Bronx";
      } else if (v === "107") {
        this.referral.city = "Yonkers";
      } else if (v === "100") {
        this.referral.city = "Manhattan";
      }
    }
  }
}

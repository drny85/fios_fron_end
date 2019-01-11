import { Component, OnInit, Input } from "@angular/core";
import { RefereeServiceService } from "../../../services/referee/referee-service.service";
import { Referee } from "src/app/models/referee.model";
import { Referral } from "../../../models/referral.model";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { ReferralService } from "src/app/services/referral/referral.service";
import { Manager } from "../../../models/manager.model";
import { ManagerService } from "../../../services/manager/manager.service";
import { User } from "../../../models/user.model";
import { AuthService } from "../../../services/auth/auth.service";

@Component({
  selector: "app-add-referral",
  templateUrl: "./add-referral.component.html",
  styleUrls: ["./add-referral.component.css"]
})
export class AddReferralComponent implements OnInit {
  referees: Referee[] = [];
  referresCopy: Referee[] = [];
  user: User;
  users: User[] = [];

  selected = "new";

  referralBy: string;
  managers: Manager[] = [];

  referral: Referral = {
    name: "",
    last_name: "",
    address: {
      address: "",
      apt: "",
      city: "",
      zipcode: ""
    },
    phone: "",
    email: "",
    status: "",
    moveIn: "",
    referralBy: "",
    comment: "",
    manager: "",
    userId: ""
  };

  constructor(
    private refereeServ: RefereeServiceService,
    private router: Router,
    private referralServ: ReferralService,
    private managersServ: ManagerService,
    private authServ: AuthService
  ) {}

  ngOnInit() {
    this.getManagers();
    this.getReferees();
    this.getAllUsers();
    this.getSignedInUser();
  }

  getManagers() {
    this.managersServ.getManagers().subscribe(managers => {
      this.managers = managers;
      console.log("Manager:", managers);
    });
  }

  getReferees() {
    this.refereeServ.getReferees().subscribe(referees => {
      console.log("REFEREREES:", referees);
      this.referees = referees;
      this.referresCopy = referees;
    });
  }

  getAllUsers() {
    this.authServ.getAllUsers().subscribe(users => {
      this.users = users;
      console.log("All Users:", this.users);
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

  onSubmit(e: NgForm) {
    if (this.referral.userId === "") {
      this.referral.userId = this.user._id;
    }
    this.referralServ.addReferral(this.referral).subscribe(
      ref => {
        console.log("Ref:", ref);
        e.reset();
        this.router.navigate(["referrals"]);
      },
      error => {
        if (error) {
          console.log("No error");
          console.log(error.error.message);
          return;
        }
      }
    );
  }

  formatPhone(obj: NgForm) {
    let phone = obj.value;
    if (String(phone).length === 3) {
      this.referral.phone += "-";
    }

    if (String(phone).length === 7) {
      this.referral.phone += "-";
    }
  }

  populateCity(e: NgForm) {
    let v = e.value;
    if (v.length >= 3) {
      if (v === "104") {
        this.referral.address.city = "Bronx";
      } else if (v === "107") {
        this.referral.address.city = "Yonkers";
      } else if (v === "100") {
        this.referral.address.city = "Manhattan";
      }
    }
  }

  checking() {
    this.referees = this.referresCopy;
    this.referees = this.referees.filter(
      ref => ref.userId === this.referral.userId
    );
  }
}

import { Component, OnInit } from "@angular/core";
import { RefereeServiceService } from "../../../services/referee/referee-service.service";
import { Referee } from "src/app/models/referee.model";
import { Referral } from "../../../models/referral.model";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-add-referral",
  templateUrl: "./add-referral.component.html",
  styleUrls: ["./add-referral.component.css"]
})
export class AddReferralComponent implements OnInit {
  referees: Referee[] = [];

  referralBy: string;

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
    comment: ""
  };

  constructor(
    private refereeServ: RefereeServiceService,
    private router: Router
  ) {}

  ngOnInit() {
    this.refereeServ.getReferees().subscribe(referees => {
      console.log(referees);
      this.referees = referees;
    });
  }

  onSubmit(e: NgForm) {
    this.refereeServ
      .addReferral(this.referral)
      .subscribe(ref => console.log("Ref:", ref));

    e.reset();
    this.router.navigate(["/referrals"]);
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
        this.referral.address.city = "Bronx";
      } else if (v === "107") {
        this.referral.address.city = "Yonkers";
      } else if (v === "100") {
        this.referral.address.city = "Manhattan";
      }
    }
  }
}

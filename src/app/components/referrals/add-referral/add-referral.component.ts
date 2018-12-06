import { Component, OnInit } from "@angular/core";
import { RefereeServiceService } from "../../../services/referee-service.service";
import { Referee } from "src/app/models/referee.model";
import { Referral } from "../../../models/referral.model";
import { NgForm } from "@angular/forms";

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

  constructor(private refereeServ: RefereeServiceService) {}

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
  }
}

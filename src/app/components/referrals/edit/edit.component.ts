import { Component, OnInit } from "@angular/core";
import { ReferralService } from "../../../services/referral/referral.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Referral } from "../../../models/referral.model";
import { Referee } from "src/app/models/referee.model";
import { RefereeServiceService } from "../../../services/referee/referee-service.service";
import { NgForm } from "@angular/forms";

declare let M: any;

@Component({
  selector: "app-edit",
  templateUrl: "./edit.component.html",
  styleUrls: ["./edit.component.css"]
})
export class EditComponent implements OnInit {
  id: string;
  referees: Referee[];
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
    mon: "",
    due_date: "",
    package: "",
    order_date: "",
    email: "",
    status: "",
    moveIn: "",
    referralBy: "",
    comment: ""
  };

  constructor(
    private refServ: ReferralService,
    private activedRoute: ActivatedRoute,
    private refereeServ: RefereeServiceService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getReferees();
    this.getReferral();
    // M.toast({ html: "I am a toast!" });
  }

  getReferral() {
    this.id = this.activedRoute.snapshot.params["id"];
    this.refServ.getReferral(this.id).subscribe(referral => {
      this.referral = referral.referral;
      console.log(referral);
    });
  }

  getReferees() {
    this.refereeServ.getReferees().subscribe(referees => {
      this.referees = referees;
      M.updateTextFields();
      console.log(referees);
    });
  }

  statusChanged(e) {
    console.log(e);
    if (e.value === "closed") {
      M.updateTextFields();
    }
  }

  onSubmit(e: NgForm) {
    this.refServ.updateReferral(this.referral).subscribe(ref => {
      if (ref) {
        console.log(ref);
        e.reset();
        console.log("Status:", this.referral.status);
        this.router.navigate([`detail/${this.referral._id}`]);
        M.toast({ html: "Referral Updated!", displayLength: 2000 });
        if (ref.status === "closed") {
          M.toast({
            html: "Great job on closing that sale!",
            classes: "teal",
            displayLength: 6000
          });
        }
      }
    });
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

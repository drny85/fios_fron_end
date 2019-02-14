import { Component, OnInit } from "@angular/core";
import { ReferralService } from "../../../services/referral/referral.service";
import { Router, ActivatedRoute } from "@angular/router";
import * as moment from "moment";
import { Referral } from "src/app/models/referral.model";
import { trigger, transition, style, animate } from "@angular/animations";

declare let M: any;

@Component({
  selector: "app-detail",
  templateUrl: "./detail.component.html",
  styleUrls: ["./detail.component.css"]
})
export class DetailComponent implements OnInit {
  referral: Referral;
  id: string;
  error = {};

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
      this.referral = referral;
      console.log(this.referral);
    });
  }

  confirmDelete(id: string) {
    if (!confirm("Are you sure you want to delete it?")) return;

    this.refServ.deleteReferal(id).subscribe(
      ref => {
        this.router.navigate(["/referrals"]);
        M.toast({ html: "Referral Deleted!", classes: "red" });
      },
      (error: Response) => {
        if (error.status === 401) {
          this.error["msg"] = "Unauthorized";
          console.log(this.error);
          M.toast({ html: "Referral CANNOT BE DELETED", classes: "red" });
        }
      }
    );
  }

  sendCollateral(email: string) {
    if (!confirm("You are sending an email to " + email + "?")) return;
    if (email.length > 5) {
      this.refServ.sendCollateral(email, this.referral).subscribe(
        (e: {message: string, referral: Referral}) => {
          if (e.message === "Email Sent.") {
            this.referral = e.referral;
            console.log(this.referral);
            M.toast({
              html: `Email has been sent to ${this.referral.name.toUpperCase()}`,
              displayLength: 6000,
              classes: "green"
            });
          }
        },
        error => console.log(error)
      );
    }
  }
}

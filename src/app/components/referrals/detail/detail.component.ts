import { Component, OnInit } from "@angular/core";
import { ReferralService } from "../../../services/referral/referral.service";
import { Router, ActivatedRoute } from "@angular/router";
import * as moment from "moment";
import { Referral } from "src/app/models/referral.model";
import { trigger, transition, style, animate } from "@angular/animations";
import { type } from "os";

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
}

import { Component, OnInit } from "@angular/core";
import { RefereeServiceService } from "../../../services/referee-service.service";
import { Referee } from "src/app/models/referee.model";

@Component({
  selector: "app-add-referral",
  templateUrl: "./add-referral.component.html",
  styleUrls: ["./add-referral.component.css"]
})
export class AddReferralComponent implements OnInit {
  constructor(private refereeServ: RefereeServiceService) {}

  referees: Referee[] = [];

  ngOnInit() {
    this.refereeServ.getReferees().subscribe(referees => console.log(referees));
  }
}

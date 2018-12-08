import { Component, OnInit } from "@angular/core";
import { RefereeServiceService } from "src/app/services/referee/referee-service.service";
import { Referee } from "../../../models/referee.model";

@Component({
  selector: "app-all-referres",
  templateUrl: "./all-referres.component.html",
  styleUrls: ["./all-referres.component.css"]
})
export class AllReferresComponent implements OnInit {
  referees: Referee[] = [];

  constructor(private refereeServ: RefereeServiceService) {}

  ngOnInit() {
    this.getReferees();
  }

  getReferees() {
    this.refereeServ.getReferees().subscribe(referees => {
      this.referees = referees;
      console.log(referees);
    });
  }
}

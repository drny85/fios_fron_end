import { Component, OnInit } from "@angular/core";
import { Referee } from "../../../models/referee.model";
import { ActivatedRoute } from "@angular/router";
import { RefereeServiceService } from "../../../services/referee/referee-service.service";

@Component({
  selector: "app-referee-details",
  templateUrl: "./referee-details.component.html",
  styleUrls: ["./referee-details.component.css"]
})
export class RefereeDetailsComponent implements OnInit {
  id: string;
  referee: Referee;

  constructor(
    private activedRoute: ActivatedRoute,
    private refereeServ: RefereeServiceService
  ) {}

  ngOnInit() {
    this.getReferee();
  }

  getReferee() {
    this.id = this.activedRoute.snapshot.params["id"];
    this.refereeServ.getReferee(this.id).subscribe(referee => {
      this.referee = referee;
      console.log(referee);
    });
  }
}

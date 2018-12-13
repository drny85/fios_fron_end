import { Component, OnInit } from "@angular/core";
import { Referee } from "../../../models/referee.model";
import { ActivatedRoute, Router } from "@angular/router";
import { RefereeServiceService } from "../../../services/referee/referee-service.service";

declare let M: any;
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
    private refereeServ: RefereeServiceService,
    private router: Router
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

  confirmDelete(id: string) {
    if (!confirm("Are you sure you want to delete it?")) return;
    console.log(id);
    this.refereeServ.deleteReferee(id).subscribe(ref => {
      this.router.navigate(["/referee/all-referees"]);
      M.toast({ html: "Referee Deleted!", classes: "orange" });
    });
  }
}

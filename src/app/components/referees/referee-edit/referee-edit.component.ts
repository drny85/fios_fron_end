import { Component, OnInit } from "@angular/core";
import { Referee } from "src/app/models/referee.model";
import { ActivatedRoute, Router } from "@angular/router";
import { RefereeServiceService } from "../../../services/referee/referee-service.service";
import { NgForm } from "@angular/forms";

declare let M: any;

@Component({
  selector: "app-referee-edit",
  templateUrl: "./referee-edit.component.html",
  styleUrls: ["./referee-edit.component.css"]
})
export class RefereeEditComponent implements OnInit {
  id: string;

  referee: Referee = {
    _id: "",
    name: "",
    last_name: "",
    email: "",
    phone: ""
  };

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
    });
  }

  editReferee(f: NgForm) {
    if (!f.valid) return;
    this.refereeServ.updateReferee(this.referee).subscribe(ref => {
      // vavigate back to referee details
      this.router.navigate([`referee/details/${this.referee._id}`]);
      // sending toast message
      M.toast({ html: "Referee Updated!" });
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
    this.referee.phone = x;
  }
}

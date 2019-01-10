import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { RefereeServiceService } from "../../../services/referee/referee-service.service";
import { Router } from "@angular/router";
import { Referee } from "../../../models/referee.model";

declare let M: any;

@Component({
  selector: "app-add-referee",
  templateUrl: "./add-referee.component.html",
  styleUrls: ["./add-referee.component.css"]
})
export class AddRefereeComponent implements OnInit {
  referee: Referee = {
    _id: "",
    name: "",
    last_name: "",
    email: "",
    phone: ""
  };

  constructor(
    private refereeServ: RefereeServiceService,
    private router: Router
  ) {}

  ngOnInit() {}

  addReferee(f: NgForm) {
    if (!f.valid) return;
    this.refereeServ.addReferee(this.referee).subscribe(
      ref => {
        // vavigate back to referee details
        this.router.navigate(["referee/all-referees"]);
        M.toast({ html: "Referee Updated!" });
      },
      error => {
        console.log(error.error);
      }
    );
  }

  formatPhone(obj: NgForm) {
    let phone = obj.value;
    if (String(phone).length === 3) {
      this.referee.phone += "-";
    }

    if (String(phone).length === 7) {
      this.referee.phone += "-";
    }
  }
  //   let numbers = obj.value;
  //   let x = obj.value;

  //   numbers.replace(/\D/g, "");
  //   let char = {
  //     0: "(",
  //     3: ") ",
  //     6: "-"
  //   };
  //   x = "";
  //   for (let i = 0; i < numbers.length; i++) {
  //     x += (char[i] || "") + numbers[i];
  //   }
  //   this.referee.phone = x;
  // }
}

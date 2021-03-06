import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ManagerService } from "../../../services/manager/manager.service";
import { Router } from "@angular/router";
import { Manager } from "../../../models/manager.model";

declare let M: any;

@Component({
  selector: "app-add-manager",
  templateUrl: "./add-manager.component.html",
  styleUrls: ["./add-manager.component.css"]
})
export class AddManagerComponent implements OnInit {
  manager: Manager = {
    _id: "",
    name: "",
    last_name: "",
    email: "",
    phone: ""
  };

  errors: any = {};

  constructor(private managerServ: ManagerService, private router: Router) {}

  ngOnInit() {}

  addManager(f: NgForm) {
    if (!f.valid) return;
    this.managerServ.addManager(this.manager).subscribe(
      ref => {
        // vavigate back to referee details
        this.router.navigate(["manager/all-managers"]);
        M.toast({ html: "Referee Updated!" });
      },
      err => {
        if (err) {
          this.errors.message = err.error.message;
          setTimeout(() => {
            this.errors = null;
          }, 3000);
        }
      }
    );
  }

  formatPhone(obj: NgForm) {
    let phone = obj.value;
    if (String(phone).length === 3) {
      this.manager.phone += "-";
    }

    if (String(phone).length === 7) {
      this.manager.phone += "-";
    }
  }
}

import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../../services/auth/auth.service";
import { ActivatedRoute, Router } from "@angular/router";
import { User } from "../../../models/user.model";
import { NgForm } from "@angular/forms";
import { userInfo } from "os";

@Component({
  selector: "app-user-edit",
  templateUrl: "./user-edit.component.html",
  styleUrls: ["./user-edit.component.css"]
})
export class UserEditComponent implements OnInit {
  id: string;
  user: User;
  showOtherVendor = false;
  coaches: User[] = [];
  error = "";

  constructor(
    private authServ: AuthService,
    private activedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.getUser();
    this.getCoaches();
  }

  getUser() {
    this.id = this.activedRoute.snapshot.params["id"];
    if (this.id) {
      this.authServ.getUserById(this.id).subscribe(
        user => {
          this.user = user;
        },
        err => {
          console.log(err);
        }
      );
    }
  }

  updateUser() {
    if (this.user.title && this.user.vendor) {
      this.user.profileCompleted = true;
      console.log("EDIT", this.user);
    }
    this.authServ.updateUser(this.user).subscribe(
      user => {
        this.user = user;

        this.router.navigate(["user/detail/" + this.id]);
      },
      err => {
        this.error = err.error;
      }
    );
  }

  getCoaches() {
    this.authServ.getCoaches().subscribe(
      coaches => {
        this.coaches = coaches;
      },
      err => {
        console.log(err);
      }
    );
  }

  checkVendor(e: NgForm) {
    let value = e.value;
    if (value === "other") {
      this.showOtherVendor = true;
      this.user.vendor = "";
    } else {
      this.showOtherVendor = false;
    }
  }
}

import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { NgForm } from "@angular/forms";
import { AuthService } from "../../../services/auth/auth.service";
import { User } from "../../../models/user.model";
import { Router } from "@angular/router";

declare let M: any;

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  errors: any = {};
  user: any;

  constructor(private authServ: AuthService, private router: Router) {}

  ngOnInit() {}

  login(e: NgForm) {
    if (!e.valid) return;

    this.authServ.login(e.value.email, e.value.password).subscribe(user => {
      this.user = user;

      localStorage.setItem("token_id", this.user.token);
      console.log(this.user);

      this.router.navigate(["/"]);
    }),
      error => {
        if (error) {
          this.errors.email = error.error.message;
        }
      };
  }

  logout() {
    this.authServ.logout();
    M.toast({ html: "You are now logged out!", classes: "green" });
    this.router.navigate(["login"]);
  }
}

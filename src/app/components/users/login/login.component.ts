import { Component, OnInit, OnDestroy } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { NgForm } from "@angular/forms";
import { AuthService } from "../../../services/auth/auth.service";
import { User } from "../../../models/user.model";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { query } from "@angular/animations";

declare let M: any;

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit, OnDestroy {
  errors: any = {};
  user: User;
  activeMsg = {};
  activated = false;

  constructor(private authServ: AuthService, private router: Router) {}

  ngOnInit() {}

  login(e: NgForm) {
    if (!e.valid) return;

    this.authServ.login(e.value.email, e.value.password).subscribe(
      user => {
       
        if (user) {
          this.authServ.userLoginHandler(user);
          if (!user.user.roles.active) {
            this.activeMsg["msg"] =
              "Your account has been created but has not been activated";
            this.activated = true;
          } else {
            this.router.navigate(["/"]);
          }
        }
      },
      (err: Response) => {
       if(err.status === 400) {
         this.errors['message'] = 'Invalid email or password';
       }
      }
    );
  }

  logout() {
    this.authServ.logout();
    M.toast({ html: "You are now logged out!", classes: "green" });
  }

  ngOnDestroy() {}
}

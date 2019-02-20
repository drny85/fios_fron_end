import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../../services/auth/auth.service";
import { User } from "../../models/user.model";
import { Subscription } from "rxjs";
import { map } from "rxjs/operators";

declare let M: any;
@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit, OnDestroy {
  user: any;
  loggedIn: boolean = false;
  subscription: Subscription;
  userSubs: Subscription;
  isAdmin: boolean = false;
  constructor(private router: Router, private authServ: AuthService) {}

  ngOnInit() {
    this.getCurrentUser();
    this.loggedIn = this.authServ.getIsAuth();
    this.isAdmin = this.authServ.getIsAdmin();
    this.subscription = this.authServ.getAuthStatus().subscribe(isAuth => {
      this.loggedIn = isAuth;
    });
  }

  logout() {
    this.authServ.logout();
    M.toast({ html: "You are now logged out!", classes: "green" });
  }

  getCurrentUser() {
    this.authServ
      .getCurrent()
      .subscribe(user => {
        console.log(user);
        this.user = user;
      });
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscription.unsubscribe();
    this.userSubs.unsubscribe();
  }
}

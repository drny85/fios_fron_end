import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { AuthService } from "../../../services/auth/auth.service";
import { User } from "../../../models/user.model";

@Component({
  selector: "app-user-detail",
  templateUrl: "./user-detail.component.html",
  styleUrls: ["./user-detail.component.css"]
})
export class UserDetailComponent implements OnInit {
  id: string;
  user: User;
  isAdmin: boolean = false;

  constructor(
    private router: Router,
    private activedRoute: ActivatedRoute,
    private authServ: AuthService
  ) {}

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this.id = this.activedRoute.snapshot.params["id"];
    this.authServ.getUserById(this.id).subscribe(user => {
      this.user = user;
      console.log(this.user);
    });
  }

  changeUserRole(e: any) {
    const value = e.target.checked;
    const role = e.target.parentNode.parentNode.children[0].innerText.toLowerCase();
    if (role === "admin") {
      if (!confirm("Are you sure you want to make this change?")) return;
    }

    this.authServ.updateUser(this.user).subscribe(
      updatedUser => {
        this.user = updatedUser;
        this.authServ.currrent.next(this.user);
        console.log("U:", this.user);
      },
      err => {
        console.log(err.error);
      }
    );
  }
}

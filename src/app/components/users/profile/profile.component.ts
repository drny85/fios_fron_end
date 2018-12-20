import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../../services/auth/auth.service";
import { User } from "../../../models/user.model";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  user: User;

  constructor(private AuthService: AuthService) {}

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    const userId = localStorage.getItem("userId");
    if (userId) {
      this.AuthService.getUserById(userId).subscribe(user => console.log(user));
    }
  }
}

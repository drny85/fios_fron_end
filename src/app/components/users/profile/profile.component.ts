import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../../services/auth/auth.service";
import { User } from "../../../models/user.model";
import { map } from "rxjs/operators";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  user: User;
  coach: string = "";
  users: User[] = [];
  add_coach: boolean = false;

  constructor(private AuthService: AuthService) {}

  ngOnInit() {
    this.getUser();
    this.getUsers();
  }

  getUser() {
    const userId = localStorage.getItem("userId");
    if (userId) {
      this.AuthService.getUserById(userId).subscribe(user => {
        this.user = user;
        console.log(this.user);
      });
    }
  }

  addCoach(e: HTMLInputElement) {
    this.add_coach = true;
    console.log(e.innerText);
    console.log(this.coach);
  }

  confirmAdded() {
    this.user.coach = this.coach;
    this.AuthService.updateUser(this.user).subscribe(user => {
      this.user = user;
      this.add_coach = false;
    });
  }

  getUsers() {
    this.AuthService.getAllUsers().subscribe(users => {
      this.users = users.filter(user => user.roles.coach === true);
      console.log("USERS_COACH:", this.users);
    });
  }
}

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
  coaches: User[] = [];
  add_coach: boolean = false;

  constructor(private AuthService: AuthService) {}

  ngOnInit() {
    this.getUser();
    this.getCoaches();
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
    this.add_coach = !this.add_coach;
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

  getCoaches() {
    this.AuthService.getCoaches().subscribe(coaches => {
      this.coaches = coaches.filter(c => c.roles.coach === true);
      console.log(this.coaches);
    });
  }
}

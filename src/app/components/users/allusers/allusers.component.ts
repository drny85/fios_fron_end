import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../../services/auth/auth.service";

@Component({
  selector: "app-allusers",
  templateUrl: "./allusers.component.html",
  styleUrls: ["./allusers.component.css"]
})
export class AllusersComponent implements OnInit {
  users;

  constructor(private authServ: AuthService) {}

  ngOnInit() {
    this.authServ.getAllUsers().subscribe(users => {
      this.users = users;
      this.authServ.currrent.next();
    });
  }
}

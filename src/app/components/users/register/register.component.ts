import { Component, OnInit } from "@angular/core";
import { User } from "../../../models/user.model";
import { NgForm } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { AuthService } from "../../../services/auth/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  user: User = {
    name: "",
    last_name: "",
    phone: "",
    email: "",
    password: ""
  };

  password1: string;
  pswMatched: boolean = false;

  constructor(private authServ: AuthService, private router: Router) {}

  ngOnInit() {}

  registerUser(e: NgForm) {
    if (!this.pswMatched || !e.valid) return;

    this.authServ.register(this.user).subscribe(user => {
      if (user) {
        console.log(user);
        this.router.navigate(["login"]);
      } else {
        return;
      }
    });

    // this.http.post("http://localhost:3000/user/newuser/", this.user).subscribe(
    //   user => {
    //     console.log(user);
    //   },
    //   err => {
    //     console.log("Error:", err.error.message);
    //   }
    // );

    // console.log(e.valid);
  }

  formatPhone(obj: NgForm) {
    let numbers = obj.value;
    let x = obj.value;

    numbers.replace(/\D/g, "");
    let char = {
      0: "(",
      3: ") ",
      6: "-"
    };
    x = "";
    for (let i = 0; i < numbers.length; i++) {
      x += (char[i] || "") + numbers[i];
    }
    this.user.phone = x;
  }

  checkPassword(v: NgForm) {
    let psw1 = v.value;
    console.log(this.pswMatched, v.valid);
    if (this.password1 === psw1) {
      this.pswMatched = true;
    } else {
      this.pswMatched = false;
    }
  }
}

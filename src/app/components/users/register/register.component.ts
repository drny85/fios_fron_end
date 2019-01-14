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
    password: "",
    password1: "",
    coach: ""
  };

  errors = {};

  password1: string;
  pswMatched: boolean = false;

  constructor(private authServ: AuthService, private router: Router) {}

  ngOnInit() {}

  registerUser(e: NgForm) {
    // if (!this.pswMatched || !e.valid) return;

    this.authServ.register(this.user).subscribe(
      user => {
        if (user) {
          console.log(user);
          this.router.navigate(["/user/login"]);
        } else {
          return;
        }
      },
      err => {
        let errors = err.error as Array<any>;
        if (errors.length > 0) {
          errors.forEach(e => {
            if (e) {
              this.errors[e.param] = e.msg;
            }
          });

          console.log(this.errors);
          this.errors = {};
        }
      }
    );

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
    let phone = obj.value;
    if (String(phone).length === 3) {
      this.user.phone += "-";
    }

    if (String(phone).length === 7) {
      this.user.phone += "-";
    }
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

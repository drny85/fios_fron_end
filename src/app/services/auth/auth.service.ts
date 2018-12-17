import { Injectable, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { User } from "../../models/user.model";
import { Subject, Observable } from "rxjs";
import { Router } from "@angular/router";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class AuthService implements OnInit {
  baseUrl = "http://localhost:3000/user/";
  user: any;
  private userId: string;
  private token: string;
  private authStatusListener = new Subject<boolean>();
  private currrent = new Subject<any>();
  private isAuth = false;

  headers: HttpHeaders = new HttpHeaders();

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    console.log(this.user);
  }

  autoAuthUser() {
    const authInfo = this.getAuthdata();
    if (!authInfo) return;
    this.token = authInfo.token;
    this.isAuth = true;
    this.authStatusListener.next(true);
    this.currrent.next(this.user);
  }

  getAllUsers() {
    return this.http.get(this.baseUrl + "all");
  }

  getAuthStatus() {
    return this.authStatusListener.asObservable();
  }

  getCurrent() {
    return this.currrent.asObservable();
  }

  getUserById(id: string) {
    return this.http.get(this.baseUrl + id);
  }

  getIsAuth() {
    return this.isAuth;
  }

  getUser() {
    return this.http.get(this.baseUrl + "me");
  }

  login(email: string, password: string) {
    const userData = { email: email, password: password };

    this.http
      .post<any>(this.baseUrl + "login/", userData)
      .pipe(
        map(user => {
          return user;
        })
      )
      .subscribe(
        user => {
          if (!user) return;
          this.user = user;
          console.log(this.user);
          this.token = user.token;
          this.userId = user.user._id;
          this.isAuth = true;
          localStorage.setItem("userId", this.userId);
          this.authStatusListener.next(true);
          this.currrent.next(user);
          this.saveAuthDate(this.token);
          this.router.navigate(["/"]);
        },
        error => {
          console.log(error.error.message);
        }
      );
  }

  logout() {
    this.token = null;
    this.isAuth = false;
    this.authStatusListener.next(false);
    localStorage.clear();
    this.router.navigate(["login"]);
  }

  register(user: User) {
    return this.http.post(this.baseUrl + "newuser", user);
  }

  getToken() {
    // const token = localStorage.getItem("token_id");
    // if (token) {
    //   return token;
    // } else {
    //   return false || null;
    // }
    return this.token;
  }

  private saveAuthDate(token: string) {
    localStorage.setItem("token_id", token);
  }

  private getAuthdata() {
    const token = localStorage.getItem("token_id");

    if (!token) {
      return;
    }

    return {
      token: token
    };
  }
}

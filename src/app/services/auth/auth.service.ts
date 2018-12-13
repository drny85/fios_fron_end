import { Injectable, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "../../models/user.model";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AuthService implements OnInit {
  baseUrl = "http://localhost:3000/user/";

  private authStatusListener = new Subject<boolean>();
  private isAuth = false;

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  getAuthStatus() {
    return this.authStatusListener.asObservable();
  }

  getIsAuth() {
    return this.isAuth;
  }

  getUser() {
    return this.http.get(this.baseUrl + "me");
  }

  login(email: string, password: string) {
    const userData = { email: email, password: password };
    return this.http.post(this.baseUrl + "login/", userData);
  }

  logout() {
    localStorage.clear();
  }

  register(user: User) {
    return this.http.post(this.baseUrl + "newuser", user);
  }

  getToken() {
    const token = localStorage.getItem("token_id");
    if (token) {
      return token;
    } else {
      return false || null;
    }
  }
}

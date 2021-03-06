import { Component, OnInit, OnDestroy } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AuthService } from "./services/auth/auth.service";
import { isDevMode } from '@angular/core';
declare let M: any;

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(private authServ: AuthService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this.authServ.autoAuthUser();
    console.log(isDevMode());
  }

  ngOnDestroy() {
    localStorage.removeItem("userId");
    localStorage.removeItem("token");
  }
}

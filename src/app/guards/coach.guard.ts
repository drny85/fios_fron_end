import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../services/auth/auth.service";
import { map } from "rxjs/operators";
import { throwToolbarMixedModesError } from "@angular/material";

@Injectable({
  providedIn: "root"
})
export class CoachGuard implements CanActivate {
  isCoach: boolean;
  constructor(private authServ: AuthService, private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    const id = localStorage.getItem("userId");
    if (id) {
      this.authServ.getUserById(id).subscribe(user => {
        this.isCoach = user.roles.coach;
        if (!this.isCoach) {
          return false;
        }
      });
    }

    return this.isCoach;
  }
}

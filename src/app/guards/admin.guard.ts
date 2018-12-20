import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../services/auth/auth.service";

@Injectable({
  providedIn: "root"
})
export class AdminGuard implements CanActivate {
  isAdmin: boolean;
  constructor(private authServ: AuthService, private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    const id = localStorage.getItem("userId");
    if (id) {
      this.authServ.getUserById(id).subscribe(user => {
        this.isAdmin = user.roles.isAdmin;
        if (!this.isAdmin) {
          return false;
        }
      });
    }

    return this.isAdmin;
  }
}

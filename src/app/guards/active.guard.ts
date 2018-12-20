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
export class ActiveGuard implements CanActivate {
  isActive: boolean;
  constructor(private authServ: AuthService, private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    const id = localStorage.getItem("userId");
    if (id) {
      return true

  } else {
    this.router.navigate(['/user/login']);
    return false;
  }

}

}

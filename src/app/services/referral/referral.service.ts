import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Referral } from "../../models/referral.model";

@Injectable({
  providedIn: "root"
})
export class ReferralService {
  baseUrl: string = "http://localhost:3000/";

  constructor(private http: HttpClient) {}

  getReferrals() {
    return this.http.get<Referral[]>(this.baseUrl + "referrals");
  }
}

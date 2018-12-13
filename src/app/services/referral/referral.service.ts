import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Referral } from "../../models/referral.model";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class ReferralService {
  baseUrl: string = "http://localhost:3000/";

  constructor(private http: HttpClient) {}

  addReferral(referral: Referral) {
    return this.http.post<Referral>(this.baseUrl + "add-referral", referral);
  }

  getReferrals() {
    return this.http.get<Referral>(this.baseUrl + "referrals").pipe(
      map(referrals => {
        return referrals.referrals;
      })
    );
  }

  getReferral(id: string) {
    return this.http.get<Referral>(this.baseUrl + `detail/${id}`).pipe(
      map(referral => {
        return referral.referral;
      })
    );
  }

  updateReferral(referral: Referral) {
    return this.http.post<Referral>(
      this.baseUrl + `referral/update/${referral._id}`,
      referral
    );
  }

  deleteReferal(id: string) {
    return this.http.delete(this.baseUrl + `referral/delete/${id}`);
  }

  getReferralsById(id: string) {
    return this.http
      .get<Referral[]>(this.baseUrl + `referral/myreferrals/${id}`)
      .pipe(
        map(referrals => {
          return referrals;
        })
      );
  }
}

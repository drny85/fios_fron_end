import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Referral } from "../../models/referral.model";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Dates } from 'src/app/models/dates.model';

@Injectable({
  providedIn: "root"
})
export class ReferralService {
  baseUrl: string = "/";

  constructor(private http: HttpClient) {}

  addReferral(referral: Referral) {
    return this.http.post<Referral>(this.baseUrl + "add-referral", referral);
  }

  getReferrals() {
    return this.http.get<Referral[]>(this.baseUrl + "referrals").pipe(
      map(referrals => {
        return referrals;
      })
    );
  }

  getReferral(id: string) {
    return this.http.get<Referral>(this.baseUrl + `detail/${id}`).pipe(
      map(referral => {
        return referral;
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

  sendCollateral(email: string, referral: Referral) {
    return this.http.post<{ message: string; referral: Referral }>(
      this.baseUrl + "email/collateral",
      { email: email, referral: referral }
    );
  }

  getReferralsByDates(dates: Dates) {
   
    return this.http.post<any>(this.baseUrl + 'bydates', dates);
  }
}

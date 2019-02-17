import { Injectable } from "@angular/core";
import { Note } from "../../models/note";
import { Referral } from "../../models/referral.model";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ReportsService {
  BASE_URL = "/report/";

  constructor(private http: HttpClient) {}

  sendNightlyReport(notes: Note[], referrals: Referral[], extra_email: String) {
    return this.http.post(this.BASE_URL + "nightly", { notes, referrals, extra_email });
  }
}

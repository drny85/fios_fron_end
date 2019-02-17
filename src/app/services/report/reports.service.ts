import { Injectable, isDevMode } from "@angular/core";
import { Note } from "../../models/note";
import { Referral } from "../../models/referral.model";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ReportsService {
  baseUrl =  isDevMode() ? "http://localhost:3000/" : "/";

  constructor(private http: HttpClient) {}

  sendNightlyReport(notes: Note[], referrals: Referral[], extra_email: String) {
    return this.http.post(this.baseUrl + "report/nightly", { notes, referrals, extra_email });
  }
}

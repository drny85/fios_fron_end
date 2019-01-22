import { Injectable } from "@angular/core";
import { Note } from "../../models/note";
import { Referral } from "../../models/referral.model";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ReportsService {
  BASE_URL = "http://localhost:3000/report/";

  constructor(private http: HttpClient) {}

  sendNightlyReport(notes: Note[], referrals: Referral[]) {
    return this.http.post(this.BASE_URL + "nightly", { notes, referrals });
  }
}

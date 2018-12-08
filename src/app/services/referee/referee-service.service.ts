import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Referee } from "../../models/referee.model";
import { Subject, Observable } from "rxjs";
import { Referral } from "../../models/referral.model";

@Injectable({
  providedIn: "root"
})
export class RefereeServiceService {
  private refSubject = new Subject<Referee[]>();

  baseUrl: string = "http://localhost:3000/";

  constructor(private http: HttpClient) {}

  getReferees() {
    return this.http.get<Referee[]>(this.baseUrl + "referee/all-referees");
  }

  addReferral(referral: Referral) {
    return this.http.post<Referral>(this.baseUrl + "add-referral", referral);
  }
}

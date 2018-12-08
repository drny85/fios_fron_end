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

  getReferee(id: string) {
    return this.http.get<Referee>(this.baseUrl + `referee/details/${id}`);
  }
}

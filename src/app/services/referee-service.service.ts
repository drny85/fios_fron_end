import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Referee } from "../models/referee.model";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class RefereeServiceService {
  private refSubject = new Subject<Referee[]>();
  referees: Referee[] = [];

  baseUrl: string = "http://localhost:3000/";

  constructor(private http: HttpClient) {}

  getReferees() {
    return this.http.get<Referee[]>(this.baseUrl + "referee/add-referee");
  }
}

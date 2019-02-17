import { Injectable, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Referee } from "../../models/referee.model";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class RefereeServiceService implements OnInit {
  baseUrl: string = "/";

  private token: string;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    console.log(this.getToken());
  }

  getToken() {
    const token = localStorage.getItem("token_id");
    if (token) return token;
  }

  getReferees() {
    // let headers = new HttpHeaders();
    // let header = headers.set("x-auth-token", this.getToken());
    // let token = this.getToken();

    return this.http.get<Referee[]>(this.baseUrl + "referee/all-referees");
  }

  addReferee(referee: Referee) {
    return this.http.post<Referee>(
      this.baseUrl + "referee/add-referee",
      referee
    );
  }

  getReferee(id: string) {
    return this.http.get<Referee>(this.baseUrl + `referee/details/${id}`).pipe(
      map(referee => {
        return referee.referee;
      })
    );
  }

  updateReferee(referee: Referee) {
    return this.http.post<Referee>(
      this.baseUrl + `referee/update/${referee._id}`,
      referee
    );
  }

  deleteReferee(id: string) {
    if (!id) return;
    return this.http.delete(this.baseUrl + `referee/delete/${id}`);
  }
}

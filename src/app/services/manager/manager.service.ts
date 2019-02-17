import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Manager } from "../../models/manager.model";
import { map } from "rxjs/operators";
import {isDevMode} from '@angular/core';


@Injectable({
  providedIn: "root"
})
export class ManagerService {
  manager: Manager;
  managers: Manager[] = [];

  baseUrl =  isDevMode() ? "http://localhost:3000/" : "/";

  constructor(private http: HttpClient) {}

  addManager(manager: Manager) {
    return this.http.post<Manager>(this.baseUrl + "manager/add-manager", manager).pipe(
      map(manager => {
        return manager.manager;
      })
    );
  }

  getManagers() {
    return this.http.get<Manager[]>(this.baseUrl + "manager/all-managers");
     
  }

  updateManager(manager: Manager) {
    return this.http.post(this.baseUrl + `manager/update/${manager._id}`, manager);
  }

  deleteManager(id: string) {
    if (!id) return;
    return this.http.delete(this.baseUrl + `manager/delete/${id}`);
  }

  getManager(id: string) {
    return this.http.get<Manager>(this.baseUrl + `manager/details/${id}`);
  }
}

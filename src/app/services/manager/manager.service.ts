import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Manager } from "../../models/manager.model";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class ManagerService {
  manager: Manager;
  managers: Manager[] = [];

  baseUrl = "http://localhost:3000/manager/";

  constructor(private http: HttpClient) {}

  addManager(manager: Manager) {
    return this.http.post<Manager>(this.baseUrl + "add-manager", manager).pipe(
      map(manager => {
        return manager.manager;
      })
    );
  }

  getManagers() {
    return this.http.get<Manager>(this.baseUrl + "all-managers").pipe(
      map(managers => {
        return managers.managers;
      })
    );
  }

  updateManager(manager: Manager) {
    return this.http.post(this.baseUrl + `update/${manager._id}`, manager);
  }

  deleteManager(id: string) {
    if (!id) return;
    return this.http.delete(this.baseUrl + `delete/${id}`);
  }
}
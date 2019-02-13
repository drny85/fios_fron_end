import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ManagerService } from 'src/app/services/manager/manager.service';
import { Manager } from 'src/app/models/manager.model';

declare let M: any;

@Component({
  selector: 'app-manager-edit',
  templateUrl: './manager-edit.component.html',
  styleUrls: ['./manager-edit.component.css']
})
export class ManagerEditComponent implements OnInit {

  id: string;

  manager: Manager = {
    _id: "",
    name: "",
    last_name: "",
    email: "",
    phone: ""
  };

  constructor(
    private activedRoute: ActivatedRoute,
    private managerServ: ManagerService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getManager();
  }

  getManager() {
    this.id = this.activedRoute.snapshot.params["id"];
    this.managerServ.getManager(this.id).subscribe(manager => {
      this.manager = manager;
    });
  }

  editManager(f: NgForm) {
    if (!f.valid) return;
    this.managerServ.updateManager(this.manager).subscribe(man => {
      // vavigate back to referee details
      this.router.navigate([`manager/details/${this.manager._id}`]);
      // sending toast message
      M.toast({ html: "Manager Updated!" });
    });
  }

  formatPhone(obj: NgForm) {
    let phone = obj.value;
    if (String(phone).length === 3) {
      this.manager.phone += "-";
    }

    if (String(phone).length === 7) {
      this.manager.phone += "-";
    }
  }
}


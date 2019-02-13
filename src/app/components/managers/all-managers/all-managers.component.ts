import { Component, OnInit } from '@angular/core';
import { Manager } from 'src/app/models/manager.model';
import { ManagerService } from 'src/app/services/manager/manager.service';

@Component({
  selector: 'app-all-managers',
  templateUrl: './all-managers.component.html',
  styleUrls: ['./all-managers.component.css']
})
export class AllManagersComponent implements OnInit {

  managers: Manager[] = [];

  constructor(private managerServ: ManagerService) {}

  ngOnInit() {
    this.getManagers();
  }

  getManagers() {
    this.managerServ.getManagers().subscribe(managers => {this.managers = managers
    console.log(managers)});
  }
}
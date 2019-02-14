import { Component, OnInit } from '@angular/core';
import { Manager } from 'src/app/models/manager.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ManagerService } from 'src/app/services/manager/manager.service';

declare let M: any;

@Component({
  selector: 'app-manager-details',
  templateUrl: './manager-details.component.html',
  styleUrls: ['./manager-details.component.css']
})
export class ManagerDetailsComponent implements OnInit {

  manager: Manager;
  id: string;

  constructor(private activedRoute: ActivatedRoute, private router: Router, private managerServ: ManagerService) { }

  ngOnInit() {
    this.getManager();
  }

  getManager() {
    this.id = this.activedRoute.snapshot.params['id'];
    this.managerServ.getManager(this.id).subscribe(manager => this.manager = manager, err => console.log(err));
  }

  confirmDelete(id: string) {
    if (!confirm("Are you sure you want to delete it?")) return;
   
    this.managerServ.deleteManager(id).subscribe(man => {
    
      this.router.navigate(["/manager/all-managers"]);
      M.toast({ html: "Manager Deleted!", classes: "orange" });
    }, err => {
      console.log(err);
    });
  }

}

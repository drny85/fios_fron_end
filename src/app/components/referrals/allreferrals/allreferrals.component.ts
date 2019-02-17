import { Component, OnInit, ViewChild } from "@angular/core";
import { Referral } from "src/app/models/referral.model";
import { ReferralService } from "../../../services/referral/referral.service";
import { ActivatedRoute } from "@angular/router";
import { MatTableDataSource, MatSort, MatPaginator } from "@angular/material";

@Component({
  selector: "app-allreferrals",
  templateUrl: "./allreferrals.component.html",
  styleUrls: ["./allreferrals.component.css"]
})
export class AllreferralsComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  searchKey: string;
  referrals: Referral[] = [];
  sorted: Referral[] = [];
  status: string;
  dataSource: MatTableDataSource<Referral>;
  displayedColumns: string[] = [
    "name",
    "address",
    "apt",
    "phone",
    "move",
    "status",
    "actions"
  ];

  constructor(
    private referralServ: ReferralService,
    private actidedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getReferrals();
  }

  getReferrals() {
    this.referralServ.getReferrals().subscribe(
      referrals => {
        // this.sorted = referrals;
        this.dataSource = new MatTableDataSource(referrals);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
       
        // this.dataSource.filterPredicate = (data, filter) => {
        //   return this.displayedColumns.some(ele => {
        //     return (
        //       ele != "actions" &&
        //       String(data[ele])
        //         .toLowerCase()
        //         .indexOf(filter) != -1
        //     );
        //   });
        // };
      },
      err => console.log(err)
    );

    // this.actidedRoute.queryParamMap.subscribe(params => {
    //   this.status = params.get("status");
    //   if (
    //     this.status === "" ||
    //     this.status == null ||
    //     this.status === "undefined"
    //   ) {
    //     this.referrals = referrals;
    //     console.log(this.referrals);
    //   } else {
    //     this.referrals = this.sorted.filter(
    //       ref => ref.status === this.status
    //     );
    //   }
    // });
  }

  onSearchClear() {
    this.searchKey = "";
    // this.applyFilter();
  }

  applyFilter(filterValue: string) {
    if (filterValue === 'all') {
      this.getReferrals();
    } else {
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
   
  }

}

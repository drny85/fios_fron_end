import { Units } from "./../../models/units.model";
import { Component, OnInit } from "@angular/core";
import { ReferralService } from "src/app/services/referral/referral.service";
import { NotesService } from "../../services/notes/notes.service";
import { Referral } from "src/app/models/referral.model";
import { Note } from "../../models/note";
import * as moment from "moment";
import { ReportsService } from "src/app/services/report/reports.service";
import { Router } from "@angular/router";

declare let M: any;

@Component({
  selector: "app-nightly-report",
  templateUrl: "./nightly-report.component.html",
  styleUrls: ["./nightly-report.component.css"]
})
export class NightlyReportComponent implements OnInit {
  referrals: Referral[] = [];
  units: number = 0;
  notes: Note[] = [];
  today = moment()
    .format()
    .split("T")[0];

  constructor(
    private refServ: ReferralService,
    private notesServ: NotesService,
    private reportServ: ReportsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getReferrals();
    this.getTodayNotes();
  }

  getReferrals() {
    this.refServ.getReferrals().subscribe(
      referrals => {
        this.referrals = referrals.filter(
          ref =>
            ref.status === "closed" &&
            ref.order_date.split("T")[0] === this.today
        );

        let units = new Units(this.referrals);
        console.log(units.totalUnits);
        console.log(units.packagesCount);
      },
      err => console.log(err)
    );
  }

  getTodayNotes() {
    this.notesServ.getTodayNotes().subscribe(
      notes => {
        this.notes = notes;
      },
      err => console.log(err)
    );
  }

  sendMyReport() {
    if (!confirm("Do you want to send your report now?")) return;
    this.reportServ.sendNightlyReport(this.notes, this.referrals).subscribe(
      (report: { message: string }) => {
        if (report.message === "success") {
          this.router.navigate(["/"]);
          M.toast({ html: "Report has been sent!" });
        }
      },
      err => console.log(err)
    );
  }
}

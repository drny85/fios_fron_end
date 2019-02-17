import { Units } from "./../../models/units.model";
import { Component, OnInit } from "@angular/core";
import { ReferralService } from "src/app/services/referral/referral.service";
import { NotesService } from "../../services/notes/notes.service";
import { Referral } from "src/app/models/referral.model";
import { Note } from "../../models/note";
import * as moment from "moment";
import { ReportsService } from "src/app/services/report/reports.service";
import { Router } from "@angular/router";
import { NgForm } from '@angular/forms';
import { Dates } from 'src/app/models/dates.model';

declare let M: any;

@Component({
  selector: "app-nightly-report",
  templateUrl: "./nightly-report.component.html",
  styleUrls: ["./nightly-report.component.css"]
})
export class NightlyReportComponent implements OnInit {
  referrals: Referral[] = [];
  dates: Dates = {
    start: new Date(),
    end: new Date()
  }
  allNotes: string = '';
  extra_email: string = '';
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
    this.refServ.getReferralsByDates(this.dates).subscribe(
      referrals => {
        this.referrals = referrals;
        let units = new Units(this.referrals);
        // console.log(units.totalUnits);
        // console.log(units.packagesCount);
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
    this.reportServ.sendNightlyReport(this.notes, this.referrals, this.extra_email).subscribe(
      (report: { message: string }) => {
        if (report.message === "success") {
          this.router.navigate(["/"]);
          M.toast({ html: "Report has been sent!" });
        }
      },
      err => console.log(err)
    );
  }

  getNotesByDate() {
    if (this.dates.start && this.dates.end) {
      if(this.dates.start === this.dates.end) {
        this.allNotes = `Notes from ${this.dates.start}`;
      } else {
        this.allNotes = `Notes from ${this.dates.start} to ${this.dates.end}`;
      }
      
      this.notesServ.getNoteByDate(this.dates).subscribe(
        (notes )=> {
          this.notes = notes
          console.log(this.notes);
        },
        err => console.log(err)
      );
    }
    }

  getReferralsByDate() {
    if (this.dates.start && this.dates.end) {

      this.refServ.getReferralsByDates(this.dates).subscribe((ref: Referral[]) => {
        this.referrals = ref;
        console.log(ref);
      }, (err: Response) => {
        if (err.status === 400) {
          console.log('Bad request');
        }
      })

    }
  }

  getReportByDates() {
    this.getNotesByDate();
    this.getReferralsByDate();
  }


}

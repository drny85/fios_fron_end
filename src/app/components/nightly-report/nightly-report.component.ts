import { Component, OnInit } from "@angular/core";
import { ReferralService } from "src/app/services/referral/referral.service";
import { NotesService } from "../../services/notes/notes.service";
import { Referral } from "src/app/models/referral.model";
import { Note } from "../../models/note";
import * as moment from "moment";

@Component({
  selector: "app-nightly-report",
  templateUrl: "./nightly-report.component.html",
  styleUrls: ["./nightly-report.component.css"]
})
export class NightlyReportComponent implements OnInit {
  referrals: Referral[] = [];
  notes: Note[] = [];
  today = moment()
    .format()
    .split("T")[0];

  constructor(
    private refServ: ReferralService,
    private notesServ: NotesService
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
        console.log(this.referrals);
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
}

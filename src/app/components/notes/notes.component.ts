import { Component, OnInit, NgZone, ViewChild } from "@angular/core";
import { take } from "rxjs/operators";
import { CdkTextareaAutosize } from "@angular/cdk/text-field";
import { NgForm } from "@angular/forms";
import { Note } from "src/app/models/note";
import * as moment from "moment";
import { NotesService } from "../../services/notes/notes.service";

@Component({
  selector: "app-notes",
  templateUrl: "./notes.component.html",
  styleUrls: ["./notes.component.css"]
})
export class NotesComponent implements OnInit {
  note: Note = {
    note: "",
    created: moment().format("MMMM Do YYYY, h:mm:ss a")
  };
  notes: Note[] = [];

  constructor(private ngZone: NgZone, private notesServ: NotesService) {}

  ngOnInit() {}

  @ViewChild("autosize") autosize: CdkTextareaAutosize;

  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this.ngZone.onStable
      .pipe(take(1))
      .subscribe(() => this.autosize.resizeToFitContent(true));
  }

  addNote(n: NgForm) {
    let note = n.value;
    this.note.note = note.note;
    if (String(note.note).length > 3) {
      this.notesServ.addNote(this.note).subscribe(
        notes => {
          console.log("Noted added");
        },
        err => console.log(err)
      );
    }
  }

  getTodayNotes() {
    this.notesServ.getNoteByDate().subscribe(
      notes => {
        this.notes = notes;
        console.log(notes);
      },
      err => console.log(err)
    );
  }
}

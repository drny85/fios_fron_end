import { Component, OnInit, NgZone, ViewChild } from "@angular/core";
import { take } from "rxjs/operators";
import { CdkTextareaAutosize } from "@angular/cdk/text-field";
import { NgForm } from "@angular/forms";
import { Note } from "src/app/models/note";
import * as moment from "moment";
import { NotesService } from "../../services/notes/notes.service";
import {
  trigger,
  animate,
  style,
  transition,
  state
} from "@angular/animations";

declare let M: any;

@Component({
  selector: "app-notes",
  templateUrl: "./notes.component.html",
  styleUrls: ["./notes.component.css"],
  animations: [
    trigger("fade", [
      state("void", style({ opacity: 0 })),
      transition(":enter, :leave", [animate("0.5s ease-in")])
    ])
  ]
})
export class NotesComponent implements OnInit {
  note: Note = {
    note: ""
  };
  notes: Note[] = [];
  noteToDeleteId = "";
  @ViewChild("autosize") autosize: CdkTextareaAutosize;

  constructor(private ngZone: NgZone, private notesServ: NotesService) {}

  ngOnInit() {
    this.getTodayNotes();
  }

  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this.ngZone.onStable
      .pipe(take(1))
      .subscribe(() => this.autosize.resizeToFitContent(true));
  }

  addNote(n: NgForm) {
    let note = n.value;
    this.note.note = note.note;
    // this.note.created = moment().format("MMMM Do YYYY, h:mm:ss a");
    if (String(note.note).length > 3) {
      this.notesServ.addNote(this.note).subscribe(
        notes => {
          if (notes) {
            this.getTodayNotes();
            n.reset();
          }
        },
        (err: Response) => console.log(err.status)
      );
    }
  }

  getTodayNotes() {
    this.notesServ.getTodayNotes().subscribe(
      notes => {
        this.notes = notes;
        console.log(this.notes);
      },
      err => console.log(err)
    );
  }

  onDelete() {
    let id = this.noteToDeleteId;
    this.notesServ.deleteNote(id).subscribe(
      notes => {
        this.getTodayNotes();
        M.toast({ html: "Note Deleted" });
      },
      err => console.log(err)
    );
  }

  openModal(id: string) {
    this.noteToDeleteId = id;
    console.log(this.noteToDeleteId);
    let elems = document.querySelectorAll(".modal");
    M.Modal.init(elems);
  }

  getNotesByDate(e: Event) {
    const date = (e.target as HTMLInputElement).value;
    this.notesServ.getNoteByDate(date).subscribe(
      notes => {
        console.log("BY date", notes);
      },
      err => console.log(err)
    );
  }
}

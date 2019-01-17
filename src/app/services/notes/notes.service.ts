import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Note } from "../../models/note";

@Injectable({
  providedIn: "root"
})
export class NotesService {
  BASE_URL = "http://localhost:3000/notes/";
  constructor(private http: HttpClient) {}

  addNote(note: Note) {
    return this.http.post<Note>(this.BASE_URL + "new_note", note);
  }

  getNoteByDate() {
    return this.http.get<Note[]>(this.BASE_URL + "today");
  }
}

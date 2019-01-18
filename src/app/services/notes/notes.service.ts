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

  getTodayNotes() {
    return this.http.get<Note[]>(this.BASE_URL + "today");
  }

  deleteNote(id: string) {
    return this.http.delete(this.BASE_URL + `delete/${id}`);
  }

  getNoteByDate(date: string) {
    return this.http.get(this.BASE_URL + "date/" + date);
  }
}

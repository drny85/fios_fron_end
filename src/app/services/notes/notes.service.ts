import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Note } from "../../models/note";
import { Dates } from 'src/app/models/dates.model';



@Injectable({
  providedIn: "root"
})
export class NotesService {
  BASE_URL = "/notes/";
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

  getNoteByDate(dates: Dates) {
    return this.http.post<any>(this.BASE_URL + "dates/", dates);
  }
}

import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Note } from "../../models/note";
import { Dates } from 'src/app/models/dates.model';
import { isDevMode } from '@angular/core';



@Injectable({
  providedIn: "root"
})
export class NotesService {

  baseUrl =  isDevMode() ? "http://localhost:3000/" : "/";

  constructor(private http: HttpClient) {}

  addNote(note: Note) {
    return this.http.post<Note>(this.baseUrl + "notes/new_note", note);
  }

  getTodayNotes() {
    return this.http.get<Note[]>(this.baseUrl + "notes/today");
  }

  deleteNote(id: string) {
    return this.http.delete(this.baseUrl + `notes/delete/${id}`);
  }

  getNoteByDate(dates: Dates) {
    return this.http.post<any>(this.baseUrl + "notes/dates/", dates);
  }
}

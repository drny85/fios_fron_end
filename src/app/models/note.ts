import { User } from "./user.model";
export interface Note {
  _id?: string;
  note: string;
  author?: User;
  created: string;
}

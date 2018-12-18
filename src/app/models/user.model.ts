export interface User {
  _id?: string;
  name: string;
  last_name: string;
  phone: string;
  email: string;
  password: string;
  roles?: { isAdmin: boolean; active: boolean; coach: boolean };
  token?: string;
  message?: string;
  user?: Object;
}

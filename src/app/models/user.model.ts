export interface User {
  _id?: string;
  name: string;
  last_name: string;
  phone: string;
  email: string;
  password: string;
  password1?: string;
  roles?: { isAdmin: boolean; active: boolean; coach: boolean };
  token?: string;
  message?: string;
  user?: Object;
  coach?: any;
  title?: string;
  vendor?: string;
}

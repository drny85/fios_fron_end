export interface User {
  _id?: string;
  name: string;
  last_name: string;
  phone: string;
  email: string;
  password: string;
  roles?: {};
  token?: string;
  message?: string;
}

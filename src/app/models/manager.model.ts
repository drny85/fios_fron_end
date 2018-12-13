export interface Manager {
  _id?: string;
  name: string;
  last_name: string;
  email: string;
  phone: string;
  managers?: Manager[];
  manager?: Manager;
}

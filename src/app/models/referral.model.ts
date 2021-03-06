import { Referee } from "./referee.model";
import { Manager } from "./manager.model";
import { User } from "./user.model";

export interface Referral {
  _id?: string;
  name: string;
  last_name: string;

  address: string;
  apt?: string;
  city: string;
  zipcode: string;
  phone: string;
  mon?: string;
  email?: string;
  moveIn?: string;
  due_date?: string;
  order_date?: Date;
  status: string;
  package?: string;
  date_entered?: string;
  referralBy: any;
  comment: string;
  manager?: any;
  userId?: string;
  coach?: Object;
  updatedBy?: string;
  updated?: string;
  email_sent?: boolean;
  collateral_sent?: boolean;
}

import { Referee } from "./referee.model";
import { Manager } from "./manager.model";

export interface Referral {
  _id?: string;
  name: string;
  last_name: string;
  address: {
    address: string;
    apt?: string;
    city: string;
    zipcode: string;
  };
  phone: string;
  mon?: string;
  email?: string;
  moveIn?: string;
  due_date?: string;
  order_date?: string;
  status: string;
  package?: string;
  date_entered?: string;
  referralBy: string;
  comment: string;
  referral?: Referral;
  referrals?: Referral[];
  manager?: string;
  userId?: string;
  updatedBy?: string;
  updated?: string;
}

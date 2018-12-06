import { Referee } from "./referee.model";

export interface Referral {
  name: string;
  last_name: string;
  address: {
    address: string;
    apt?: string;
    city: string;
    zipcode: string;
  };
  phone: string;
  email?: string;
  moveIn?: string;
  due_date?: string;
  order_date?: string;
  status: string;
  package?: string;
  date_entered?: string;
  referralBy: string;
  comment: string;
}

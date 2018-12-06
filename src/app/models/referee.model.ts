import { Referral } from "./referral.model";
export interface Referee {
  name: string;
  last_name: string;
  email: string;
  phone: string;
  referrals: [Referral];
}

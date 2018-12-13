import { Referral } from "./referral.model";
export interface Referee {
  _id?: string;
  name: string;
  last_name: string;
  email: string;
  phone: string;
  referrals?: [Referral];
  referee?: Referee;
  referees?: Referee[];
}

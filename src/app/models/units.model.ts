import { Referral } from './referral.model';
import * as moment from 'moment';

export class Units {
    private referrals = [];
    private units = 0;
    private package = {};// keep track of the packages
    private today = moment()
    .format()
    .split("T")[0];
   
    constructor(referrals: Referral[] = []) {
        this.referrals = referrals;
    }

    get totalUnits() {
        let tp_count = 0; 
        let dp_count = 0;
        let alone_count = 0;// track packages counts
        this.referrals.forEach(ref => {
            if (ref.package.includes('TP')) {
              this.units+= 2;
              this.package['triple'] = tp_count+= 1;
            } else if (ref.package.includes('DP')) {
              this.units+= 2;
              this.package['double'] = dp_count+= 1;
            } else if (ref.package.includes('Only')) {
              this.units+= 1;
              this.package['standalone'] = alone_count+= 1;
            } else if (ref.package.includes('Internet')) {
              this.units+= 1
              this.package['standalone'] = alone_count+= 1;
            }
          })

        return this.units;
    }

    get packagesCount() {
        return this.package;
    }

    todayUnitsCount() {
       let ref = this.referrals.filter(ref => ref.status === "closed" &&
       ref.order_date.split("T")[0] === this.today);

      
    }
}
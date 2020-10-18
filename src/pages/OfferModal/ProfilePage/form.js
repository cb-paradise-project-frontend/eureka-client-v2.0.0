import Photo from './SubPages/Photo';
import BankAccount from './SubPages/BankAccount';
import BillingAddress from './SubPages/BillingAddress';
import Birthday from './SubPages/Birthday';
import Mobile from './SubPages/Mobile';

const FORM = {
  photo: {
    label: 'Profile Picture',
    Page: Photo,
  },
  bankAccount: {
    label: 'Bank Account Details',
    Page: BankAccount,
  },
  billingAddress: {
    label: 'Billing Address',
    Page: BillingAddress,
  },
  birthday: {
    label: 'Date of Birth',
    Page: Birthday,
  },
  mobile: {
    label: 'Mobile Number',
    Page: Mobile,
  },
};

export default FORM;

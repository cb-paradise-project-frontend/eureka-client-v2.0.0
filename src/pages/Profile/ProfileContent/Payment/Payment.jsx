import React from 'react';

import styles from './Payment.module.scss';

import BankAccount from '../../../CreateProfile/SubPages/BankAccount';
import BillingAddress from '../../../CreateProfile/SubPages/BillingAddress';

const Payment = ({
  paymentContent,
  onBankChange,
  onBillChange,
}) => {
  const { bankAccount, billingAddress } = paymentContent;
  
  
  return (
    <React.Fragment>
      <div className={styles.payment_wrapper}>
        <div className={styles.bank_wrapper}>
          <BankAccount 
            storedValue={bankAccount}
            onSubmit={onBankChange}
          />
        </div>
        <div className={styles.bill_wrapper}>
          <BillingAddress 
            storedValue={billingAddress}
            onSubmit={onBillChange}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Payment;
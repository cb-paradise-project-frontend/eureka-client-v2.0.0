import React from 'react';

import Button from '../../../../components/Button';
import Input from '../../../../components/Input';
import ToPascalCase from '../../utils';

import styles from './Payment.module.scss';

const Payment = ({
  paymentContent,
  onPaymentChange,
  onSubmit,
}) => {
  const { bankAccount, billingAddress } = paymentContent;
  const paymentInputMaker = (props) => (
    Object.keys(props).map((key) => {
      const objNameDector = props.hasOwnProperty('bsb') ? 'bankAccount' : 'billingAddress';

      const handleChange = onPaymentChange(key, objNameDector);

      return (
        <Input
          key={key}
          label={ToPascalCase(key)}
          value={props[key]}
          handleChange={handleChange}
        />
      );
    })
  );

  return (
    <React.Fragment>
      <div className={styles.payment_wrapper}>
        <div className={styles.bank_wrapper}>
          {paymentInputMaker(bankAccount)}
        </div>
        <Button onClick={onSubmit}>Update Bank Detail</Button>
        <div className={styles.bill_wrapper}>
          {paymentInputMaker(billingAddress)}
        </div>
        <Button onClick={onSubmit}>Update Billing Address</Button>
      </div>
    </React.Fragment>
  );
};

export default Payment;

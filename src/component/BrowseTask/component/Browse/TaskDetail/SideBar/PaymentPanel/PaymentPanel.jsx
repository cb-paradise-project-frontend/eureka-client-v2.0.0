import React from 'react';

import styles from './PaymentPanel.module.scss';

import OfferButton from '../../OfferButton';

function PaymentPanel({ status, budget }) {
  const title = 'TASK BUDGET';

  return(
    <div className = {styles.payment_panel}>
      <div className = {styles.title}>
        {title}
      </div>
      <div className = {styles.price}>
        ${budget}
      </div>
      <div className = {styles.button_wrapper}>
        <OfferButton expired = {(status === 'expired')}/>
      </div>
    </div>
  );
}

export default PaymentPanel;
import React from 'react';

import styles from './PaymentPanel.module.scss';

import OfferButton from '../../OfferButton';
import { EXPIRED } from '../../../../../components/Status';

export default function PaymentPanel({ status, budget }) {
  const title = 'TASK BUDGET';

  return (
    <div className={styles.payment_panel} >
      <div className={styles.title} >
        {title}
      </div>
      <div className={styles.price} >
        ${budget}
      </div>
      <OfferButton isExpired={(status === EXPIRED)} />
    </div>
  );
}

import React, { useContext } from 'react';

import styles from './PaymentPanel.module.scss';

import OfferButton from '../../OfferButton';
import { EXPIRED } from '../../../../../components/Status';
import { TaskContext } from '../../../TaskContext';

export default function PaymentPanel() {
  const { status, budget } = useContext(TaskContext);

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

import React, { useContext, useState } from 'react';

import styles from './MakeOffer.module.scss';

import { TaskContext } from '../../../Browse/TaskDetail/TaskContext';
import Input from '../../../../components/Input';

export default function MakeOffer() {
  const { budget } = useContext(TaskContext);

  const [bid, setBid] = useState(budget);

  console.log(Input.Naked);

  return (
    <div className={styles.container} >
      <div className={styles.title} >
        Your Offer
      </div>
      <div className={styles.budget}>
        <div className={styles.unit}>$</div>
        <div className={styles.value}>
          <Input.Naked
            value={bid}
            handleChange={setBid}
          />
        </div>
      </div>
    </div>
  );
}

import React, { useContext } from 'react';

import styles from './MakeOffer.module.scss';

import { TaskContext } from '../../../Browse/TaskDetail/TaskContext';

export default function MakeOffer() {
  const { budget } = useContext(TaskContext);

  return (
    <div className={styles.container} >
      <div className={styles.title} >
        Your Offer
      </div>
      <div className={styles.budget}>
        <div className={styles.unit}>$</div>
        <div className={styles.value}>{budget}</div>
      </div>
    </div>
  );
}

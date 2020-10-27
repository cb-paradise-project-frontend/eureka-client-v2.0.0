import React from 'react';

import styles from './MakeOffer.module.scss';

import Input from '../../../../components/Input';

export default function MakeOffer({ bid, setBid }) {
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

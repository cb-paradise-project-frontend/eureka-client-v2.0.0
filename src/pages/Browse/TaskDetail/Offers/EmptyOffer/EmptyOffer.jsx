import React from 'react';

import styles from './EmptyOffer.module.scss';

import OfferButton from '../../OfferButton';

export default function EmptyOffer() {
  return (
    <>
      <div className={styles.offer_icon} />
      <div className={styles.button_wrapper} >
        <OfferButton />
      </div>
    </>
  );
}

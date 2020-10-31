import React, { useContext } from 'react';

import styles from './OfferList.module.scss';

import { TaskContext } from '../TaskContext';
import EmptyOffer from './EmptyOffer';
import OfferItem from './OfferItem';

export default function OfferList() {
  const { offers } = useContext(TaskContext);

  const offerList = offers.map((offer) => (
    <OfferItem offer={offer} key={offer._id} />
  ));

  return offers.length
    ? (
      <div className={styles.container} >
        {offerList}
      </div>
    ) : <EmptyOffer />;
}

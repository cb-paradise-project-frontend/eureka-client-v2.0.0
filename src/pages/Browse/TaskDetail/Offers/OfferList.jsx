import React, { useContext } from 'react';

import styles from './OfferList.module.scss';

import { TaskContext } from '../TaskContext';
import CommentAvatar from '../Comment/CommentAvatar';
import EmptyOffer from './EmptyOffer';
import useCollapsible from './useCollapsible';

function OfferItem({ offer }) {
  const Collapsible = useCollapsible();

  const {
    offeredBy: {
      avatar, fullName,
    },
    message,
  } = offer;

  return (
    <div className={styles.offer_wrapper} >
      <div className={styles.header} >
        <CommentAvatar avatarUrl={avatar} />
        <div className={styles.name} >
          {`${fullName}`}
        </div>
      </div>
      <Collapsible>
        <div className={styles.content}>
          {message}
        </div>
      </Collapsible>
    </div>
  );
}

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

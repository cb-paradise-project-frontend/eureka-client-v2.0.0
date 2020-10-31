import React from 'react';

import styles from './OfferItem.module.scss';

import CommentAvatar from '../../Comment/CommentAvatar';
import useCollapsible from '../useCollapsible';

export default function OfferItem({ offer }) {
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

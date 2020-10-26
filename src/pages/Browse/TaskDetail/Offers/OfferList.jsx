import React, { useContext, useState } from 'react';
import className from 'classnames/bind';

import styles from './OfferList.module.scss';

import { TaskContext } from '../TaskContext';
import CommentAvatar from '../Comment/CommentAvatar';
import EmptyOffer from './EmptyOffer';
import Button from '../../../../components/Button';

const cx = className.bind(styles);

export default function OfferList() {
  const { offers } = useContext(TaskContext);

  const [isCollapsed, toggleCollapse] = useState(true);

  const handleToggle = () => {
    toggleCollapse((prevState) => !prevState);
  };

  const offerList = offers.map((offer) => {
    const { offeredBy: { avatar, id, fullName }, message } = offer;

    return (
      <div
        className={styles.offer_wrapper}
        key={id}
      >
        <div className={styles.header} >
          <CommentAvatar avatarUrl={avatar} />
          <div className={styles.name} >
            {`${fullName}`}
          </div>
        </div>
        <div className={cx({
          content: true,
          isCollapsed,
        })}>
          {message}
        </div>
        <div className={styles.footer} >
          <Button.Text
            onClick={handleToggle}
          >
            {isCollapsed ? 'More' : 'Less'}
          </Button.Text>
        </div>
      </div>
    );
  });

  return offers.length
    ? (
      <div className={styles.container} >
        {offerList}
      </div>
    ) : <EmptyOffer />;
}

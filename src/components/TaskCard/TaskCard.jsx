import React from 'react';
import className from 'classnames/bind';

import styles from './TaskCard.module.scss';

import AvatarDisplay from '../AvatarDisplay';

const cx = className.bind(styles);

export default function TaskCard({
  onClick,
  selected,
  task: {
    title, status, budget, postedBy, location, due,
  },
}) {
  return (
    <div
      className={cx(
        'task_card',
        status.toLowerCase(),
        { selected },
      )}
      onClick = {onClick}
    >
      <div className={styles.header} >
        <div className={styles.title} >
          {title}
        </div>
        <div className={styles.budget} >
          ${budget}
        </div>
      </div>
      <div className={styles.content} >
        <div className={styles.avatar_container} >
          <AvatarDisplay avatarID={postedBy.avatarId} />
        </div>
        <div className={styles.location} >
          {location}
        </div>
        <div className={styles.due} >
          {new Date(due).toDateString()}
        </div>
      </div>
      <div className={styles.footer} >
        <div className={styles.status} >
          {status}
        </div>
      </div>
    </div>
  );
}

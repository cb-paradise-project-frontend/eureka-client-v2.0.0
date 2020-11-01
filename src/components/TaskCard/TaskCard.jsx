import React from 'react';
import className from 'classnames/bind';

import styles from './TaskCard.module.scss';

import Avatar from '../Avatar';

const cx = className.bind(styles);

export default function TaskCard({
  onClick,
  task: {
    title, status, budget, postedBy, location, due,
  },
}) {
  return (
    <div
      className={cx(
        'task_card',
        status.toLowerCase(),
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
          <Avatar avatarUrl={postedBy.avatar || null} />
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

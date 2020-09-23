import React from 'react';
import classNames from 'classnames/bind';
import { useHistory, useRouteMatch } from 'react-router-dom';

import styles from './TaskListItem.module.scss';

import Avatar from '../../../../components/Avatar';

export default function TaskListItem({
  task: {
    title, status, budget, poster, location, due, id,
  },
}) {
  const history = useHistory();
  const match = useRouteMatch();

  function handleClick() {
    history.push(`${match.url}/${id}`);
  }

  const cx = classNames.bind(styles);

  return (
    <div
      className={cx(
        'task_list_item',
        status.toLowerCase(),
      )}
      onClick = {handleClick}
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
          <Avatar avatarUrl={poster.avatar} />
        </div>
        <div className={styles.location} >
          {location}
        </div>
        <div className={styles.due} >
          {due}
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

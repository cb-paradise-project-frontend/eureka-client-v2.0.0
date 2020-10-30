import React, { useContext } from 'react';
import classNames from 'classnames/bind';

import styles from './TaskInfo.module.scss';
import Avatar from '../../../../../components/Avatar';
import { TaskContext } from '../../TaskContext';

const cx = classNames.bind(styles);

function TaskInfoItem({ title, content }) {
  const displayContent = content.fullName || content;

  return (
    <div className={styles.poster_info_item} >
      <div className={styles.icon_wrapper} >
        <div className={cx(
          {
            'POSTED BY': 'avatar_wrapper',
            'LOCATION': 'location_icon',
            'DUE DATE': 'date_icon',
          }[title],
        )}>
          {(title === 'POSTED BY') &&
            <Avatar avatarUrl={content.avatar} />
          }
        </div>
      </div>
      <div className={styles.poster_detail} >
        <div className={styles.title} >
          {title}
        </div>
        <div className={styles.content} >
          {displayContent}
        </div>
      </div>
    </div>
  );
}

export default function TaskInfo() {
  const { postedBy, location, due } = useContext(TaskContext);

  const taskInfo = {
    postedBy,
    location,
    due: new Date(due).toDateString(),
  };
  const infoTitle = {
    postedBy: 'POSTED BY',
    location: 'LOCATION',
    due: 'DUE DATE',
  };

  const displayedTaskInfo = Object.keys(taskInfo).map((key) => (
    <TaskInfoItem
      key={key}
      title={infoTitle[key]}
      content={taskInfo[key]}
    />
  ));

  return (
    <div className={styles.poster_info} >
      {displayedTaskInfo}
    </div>
  );
}

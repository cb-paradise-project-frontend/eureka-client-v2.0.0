import React from 'react';
import classNames from 'classnames/bind';

import styles from './TaskInfo.module.scss';
import Avatar from '../../../../../components/Avatar';

const cx = classNames.bind(styles);

function TaskInfo({ postedBy, location, due }) {
  const TaskInfoItem = ({ title, content }) => {
    const displayContent = content.name || content;

    return (
      <div className = {styles.poster_info_item}>
        <div className = {styles.icon_wrapper}>
          <div className = {cx(
            {
              'POSTED BY': 'avatar_wrapper',
              'LOCATION': 'location_icon',
              'DUE DATE': 'date_icon',
            }[title]
          )}>
            {(title === 'POSTED BY') &&
              <Avatar avatarUrl={content.avatar} />
            }
          </div>
        </div>
        <div className = {styles.poster_detail}>
          <div className = {styles.title}>
            {title}
          </div>
          <div className = {styles.content}>
            {displayContent}
          </div>
        </div>
      </div>
    );
  };

  const taskInfoList = [
    {
      title: 'POSTED BY',
      data: postedBy,
    },
    {
      title: 'LOCATION',
      data: location,
    },
    {
      title: 'DUE DATE',
      data: due,
    },
  ];

  const displayedTaskInfo = taskInfoList.map(({ title, data }) =>
    <TaskInfoItem
      key = {title}
      title = {title}
      content = {data}
    />
  );

  return (
    <div className = {styles.poster_info}>
      {displayedTaskInfo}
    </div>
  );
}

export default TaskInfo;

import React from 'react';
import classNames from 'classnames/bind';

import styles from './PosterInfoItem.module.scss';

import Avatar from '../../../../../../components/Avatar';

export default function PosterInfoItem({ title, content }) {
  const cx = classNames.bind(styles);

  const displayContent = (content.name) ? content.name : content;

  return (
    <div className = {styles.poster_info_item}>
      <div className = {styles.icon_wrapper}>
        <div className = {cx(
          {
            'POSTED BY': 'avatar_wrapper',
            'LOCATION': 'location_icon',
            'DUE DATE': 'date_icon',
          }[title],
        )}>
          {(title === 'POSTED BY')
            && <Avatar avatarUrl={content.avatar} />
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
}

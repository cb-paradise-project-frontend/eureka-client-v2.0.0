import React from 'react';
import classNames from 'classnames/bind';

import styles from './PosterInfoList.module.scss';
import Avatar from '../../../../../components/Avatar';

const cx = classNames.bind(styles);

function PosterInfoList({ posterInfo }) {
  const PosterInfoItem = ({ title, content }) => {
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

  const titleList = ['POSTED BY', 'LOCATION', 'DUE DATE'];

  const posterInfoList = titleList.map((title, index) =>
    <PosterInfoItem
      key = {title}
      title = {title}
      content = {posterInfo[index]}
    />
  );

  return (
    <div className = {styles.poster_info}>
      {posterInfoList}
    </div>
  );
}

export default PosterInfoList;

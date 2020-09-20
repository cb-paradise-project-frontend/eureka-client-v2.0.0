import React from 'react';
import classNames from 'classnames/bind';

import styles from './PosterInfoItem.module.scss';

function PosterInfoItem({ title, content }) {

  const cx = classNames.bind(styles);

  const displayContent = (content.name) ? content.name : content;

  return (
    <div className = {styles.poster_info_item}>
      <div className = {styles.icon_wrapper}>
        <div className = {cx({  //TODO
          'avatar': title === 'POSTED BY',
          'location_icon': title === 'LOCATION',
          'date_icon': title === 'DUE DATE', 
        })}>
          {(title === 'POSTED BY' && content.avatar ) &&
            <img src = {content.avatar} alt = 'avatar'/>
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

export default PosterInfoItem;
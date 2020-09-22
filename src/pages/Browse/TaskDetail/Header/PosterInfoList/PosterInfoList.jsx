import React from 'react';

import styles from './PosterInfoList.module.scss';

import PosterInfoItem from './PosterInfoItem';

function PosterInfoList({ posterInfo }) {
  const titleList = ['POSTED BY', 'LOCATION', 'DUE DATE'];

  const posterInfoList = titleList.map((title, index) => (
    <PosterInfoItem
      key = {title}
      title = {title}
      content = {posterInfo[index]}
    />
  ));
  return (
    <div className = {styles.poster_info}>
      {posterInfoList}
    </div>
  );
}

export default PosterInfoList;

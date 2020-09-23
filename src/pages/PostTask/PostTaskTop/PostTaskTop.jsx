import React from 'react';

import styles from './PostTaskTop.module.scss';

import TopBar from './TopBar';

function PostTaskTop (props) {
  return (
    <div className={styles.Main}>
      <TopBar>
        {props.children}
      </TopBar>
    </div>
  )
}

export default PostTaskTop;
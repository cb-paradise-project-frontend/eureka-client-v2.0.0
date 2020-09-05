import React from 'react';

import styles from './PostTaskTop.module.scss';

import TopBar from './TopBar';
import CloseTag from './CloseTag';

function PostTaskTop (props) {
  return (
    <div className={styles.Main}>
      <CloseTag /> 
      <TopBar>
        {props.children}
      </TopBar>
    </div>
  )
}

export default PostTaskTop;
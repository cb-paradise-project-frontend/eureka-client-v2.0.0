import React from 'react';

import styles from '../PostTaskTop.module.scss';

function TopBar(props) {
  return (
    <p className={styles.Bar}>
      {props.children}
    </p> 
  )
}

export default TopBar;
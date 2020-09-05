import React from 'react';

import styles from '../PostTaskTop.module.scss';

function CloseTag() {
  return (
    <label className={styles.Close}> 
      &times; 
    </label> 
  )
}

export default CloseTag;
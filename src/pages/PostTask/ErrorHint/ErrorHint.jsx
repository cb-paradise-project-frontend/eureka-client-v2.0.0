import React from 'react';

import styles from '../PostTaskForm/PostTaskForm.module.scss';

function ErrorHint(props) {
  return (
    <div>
      <label className={styles.error_hint}> 
        {props.children}
      </label>
    </div>
  )
}

export default ErrorHint;


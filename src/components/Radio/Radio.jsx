import React from 'react';

import styles from './Radio.module.scss';

function Radio({
  radioName,
  radioTitle,
  radioHint,
  isChecked,
  handleClick,
}) {
  return (
    <React.Fragment>
      <div className={styles.task_radio}>
        <input
          className={styles.radio}
          name={radioName}
          type="radio"
          defaultChecked={isChecked}
          onClick={handleClick}
        />
        <p className={styles.radio_title}> {radioTitle} </p>
      </div>
        <b>
          {radioHint}
        </b>
    </React.Fragment>
  );
}

export default Radio;

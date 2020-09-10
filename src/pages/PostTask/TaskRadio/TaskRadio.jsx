import React from 'react';

import styles from '../PostTaskForm/PostTaskForm.module.scss';

function TaskRadio({
  radioType,
  radioHint,
  isChecked,
  handleClick,
}) {
  return (
    <React.Fragment>
      <div className={styles.task_radio}>
        <input 
          className={styles.radio}
          name="TaskRadio"
          type="radio" 
          defaultChecked={isChecked}
          onClick={handleClick}
        />
        <p className={styles.radio_title}> {radioType} </p>
      </div>
        <b>
          {radioHint}
        </b>
    </React.Fragment>
  )
}

export default TaskRadio;


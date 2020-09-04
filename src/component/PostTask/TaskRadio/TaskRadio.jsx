import React from 'react';

import styles from '../PostTaskForm/PostTaskForm.module.scss';

function TaskRadio({
  radioType,
  radioHint,
  isChecked,
}) {
  return (
    <React.Fragment>
      <div className={styles.TaskRadio}>
        <input 
          className={styles.Radio}
          name="TaskRadio"
          type="radio" 
          defaultChecked={isChecked}
        />
        <p className={styles.RadioTitle}> {radioType} </p>
      </div>
        <b>
          {radioHint}
        </b>
    </React.Fragment>
  )
}

export default TaskRadio;


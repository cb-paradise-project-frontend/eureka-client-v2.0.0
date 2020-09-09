import React from 'react';

import styles from '../PostTaskForm/PostTaskForm.module.scss';

import classNames from 'classnames/bind';
import ErrorHint from '../ErrorHint';

function TaskInput({
  size,
  maxLength,
  onJobInputChange,
  isAbleToSubmitTaskDescription,
  displayValue,
  taskInputMsg: 
  {
    taskInputQuestion,
    taskInputHint,
    errorHint,
  },
}) {
  const cx = classNames.bind(styles);
  return (
    <React.Fragment>
      <h2 className={styles.other_heading}> 
        {taskInputQuestion}
      </h2>
      <label className={styles.hint_label}> 
        {taskInputHint}
      </label>
      <textarea 
        className={cx(
          {
            job_title: size === "small",
            job_details: size === "large",
          }
        )} 
        maxLength={maxLength} 
        onChange={(e) => onJobInputChange(e.target.value)}
        value={displayValue}
      />
      { isAbleToSubmitTaskDescription && <ErrorHint>{errorHint}</ErrorHint> }
    </React.Fragment>
  )
}

export default TaskInput;


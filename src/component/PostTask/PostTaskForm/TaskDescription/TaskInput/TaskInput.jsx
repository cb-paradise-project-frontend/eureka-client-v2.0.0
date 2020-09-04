import React from 'react';

import styles from '../../PostTaskForm.module.scss';

import classNames from 'classnames/bind';
import ErrorHint from '../../../ErrorHint';

function TaskInput({
  size,
  minLength,
  maxLength,
  onJobInputChange,
  jobLength,
  taskInputQuestion,
  taskInputHint,
  errorHint,
}) {
  const cx = classNames.bind(styles);
  return (
    <React.Fragment>
      <h2 className={styles.OtherHeading}> 
        {taskInputQuestion}
      </h2>
      <label className={styles.HintLabel}> 
        {taskInputHint}
      </label>
      <textarea 
        className={cx(
          {
            'JobTitle': size === 'small',
            'JobDetails': size === 'large',
          }
        )} 
        maxLength={maxLength} 
        onChange={onJobInputChange}  
      />
      {jobLength < minLength
        ? 
        <ErrorHint>
          {errorHint}
        </ErrorHint>
        : 
      null}
    </React.Fragment>
  )
}

export default TaskInput;


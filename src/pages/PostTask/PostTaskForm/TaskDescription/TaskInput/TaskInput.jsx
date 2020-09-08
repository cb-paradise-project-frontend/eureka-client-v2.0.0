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
  value,
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
            'job_title': size === 'small',
            'job_details': size === 'large',
          }
        )} 
        maxLength={maxLength} 
        onChange={onJobInputChange}
        value={value}
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


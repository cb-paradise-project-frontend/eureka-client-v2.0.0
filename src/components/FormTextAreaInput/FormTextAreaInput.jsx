import React from 'react';

import styles from './FormTextAreaInput.module.scss';

import classNames from 'classnames/bind';
import ErrorHint from '../../pages/PostTask/ErrorHint';

function FormTextAreaInput({
  size,
  maxLength,
  onJobInputChange,
  isAbleToSubmitTaskDescription,
  displayValue,
  errorHint,
  ...otherProps
}) {
  const cx = classNames.bind(styles);
  return (
    <React.Fragment>
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
        {...otherProps}
      />
      { isAbleToSubmitTaskDescription && <ErrorHint>{errorHint}</ErrorHint> }
    </React.Fragment>
  )
}

export default FormTextAreaInput;


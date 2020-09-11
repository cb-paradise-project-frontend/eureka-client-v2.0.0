import React from 'react';

import styles from './FormTextAreaInput.module.scss';

import classNames from 'classnames/bind';
import ErrorHint from '../../pages/PostTask/ErrorHint';

function FormTextAreaInput({
  size,
  maxLength,
  onInputChange,
  isInputInvalid,
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
            small_text_area: size === "small",
            large_text_area: size === "large",
          }
        )} 
        maxLength={maxLength} 
        onChange={(e) => onInputChange(e.target.value)}
        value={displayValue}
        {...otherProps}
      />
      { isInputInvalid && <ErrorHint>{errorHint}</ErrorHint> }
    </React.Fragment>
  )
}

export default FormTextAreaInput;


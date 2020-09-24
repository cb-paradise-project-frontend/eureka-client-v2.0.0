import React from 'react';
import classNames from 'classnames/bind';

import styles from './TextArea.module.scss';

import ErrorHint from '../../pages/PostTask/ErrorHint';

const cx = classNames.bind(styles);

const TextArea = ({
  size, maxLength, onInputChange, isInputInvalid, displayValue, errorHint, ...otherProps
}) => (
  <textarea
    className={cx(
      'text_area',
      {
        small: 'small',
        large: 'large',
      }[size],
    )}
    maxLength={maxLength}
    onChange={(e) => onInputChange(e.target.value)}
    value={displayValue}
    {...otherProps}
  />
);

const WithErrorHint = ({
  isInputInvalid, errorHint, ...otherProps
}) => (
  <>
    <TextArea {...otherProps} />
    <div className={styles.error_hint_wrapper} >
      {isInputInvalid && errorHint
        && <ErrorHint>{errorHint}</ErrorHint>
      }
    </div>
  </>
);

TextArea.WithErrorHint = WithErrorHint;

export default TextArea;

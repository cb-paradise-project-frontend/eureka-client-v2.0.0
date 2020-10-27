import React from 'react';
import classNames from 'classnames/bind';

import styles from './TextArea.module.scss';

import ErrorMessage from '../ErrorMessage';

const cx = classNames.bind(styles);

function TextArea({
  size,
  onInputChange,
  isInputInvalid,
  displayValue,
  errorHint,
  ...otherProps
}) {
  return (
    <>
      <textarea
        className={cx(
          'text_area',
          {
            small: 'small',
            large: 'large',
          }[size],
        )}
        onChange={(e) => onInputChange(e.target.value)}
        value={displayValue}
        {...otherProps}
      />
      <div className={styles.error_hint_wrapper} >
        {isInputInvalid && errorHint
          && <ErrorMessage>{errorHint}</ErrorMessage>
        }
      </div>
    </>
  );
}

export default TextArea;

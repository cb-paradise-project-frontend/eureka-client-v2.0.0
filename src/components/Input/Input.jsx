import React from 'react';
import classNames from 'classnames/bind';

import styles from './Input.module.scss';
import ErrorMessage from '../ErrorMessage';

const Input = ({
  label, name, type, placeholder, handleChange, isError, ...otherProps
}) => {
  const cx = classNames.bind(styles);
  return (
    <div className={styles.input_wrapper} >
      {label
        && <label className={styles.label} >{label}</label>
      }
      <input
        className={cx({
          input: true,
          error_input: isError,
        })}
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
        {...otherProps}
      />
    </div>
  );
};

const WithErrorMessage = ({
  isError, errorMessage, ...otherProps
}) => (
  <div className={styles.input_with_error_message}>
      <Input
        {...otherProps}
      />
      <div className={styles.error_message_wrapper} >
        {isError && errorMessage &&
          <ErrorMessage>
            {errorMessage}
          </ErrorMessage>
        }
      </div>
    </div>
);

Input.WithErrorMessage = WithErrorMessage;

export default Input;

import React from 'react';
import classNames from 'classnames/bind';

import styles from './Input.module.scss';
import ErrorMessage from '../ErrorMessage';

const cx = classNames.bind(styles);

const Input = ({
  label, name, type, placeholder, validator, handleChange, isError, ...otherProps
}) => {
  const inputHandler = ({ target: { value } }) => {
    const validInput = validator ? validator(value) : value;
    handleChange(validInput);
  };

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
        onChange={inputHandler}
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

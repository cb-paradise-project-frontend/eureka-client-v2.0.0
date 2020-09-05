import React from 'react';
import classNames from 'classnames/bind';

import styles from './FormInput.module.scss';

const cx = classNames.bind(styles);

const FormInput = ({label, name, type, placeholder, handleChange, isError, errorMessage, ...otherProps}) => {
  return (
    <div className={styles.container}>
      <label className={styles.label}>{label}</label>
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
      {
        isError ? <span className={styles.error_message}>{errorMessage}</span> : ''
      }
    </div>
  );
}

export default FormInput;

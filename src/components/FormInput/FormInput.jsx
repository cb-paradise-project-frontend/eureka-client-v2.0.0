import React from 'react';

import styles from './FormInput.module.scss';

import Input from '../Input';
import ErrorMessage from '../ErrorMessage';

const FormInput = ({
  label, name, type, placeholder, handleChange, isError, errorMessage, ...otherProps
}) => (
  <div className={styles.container}>
    <Input
      label={label}
      name={name}
      type={type}
      placeholder={placeholder}
      handleChange={handleChange}
      isError={isError}
      {...otherProps}
    />
    <div className={styles.error_message} >
      {isError &&
        <ErrorMessage>
          {errorMessage}
        </ErrorMessage>
      }
    </div>
  </div>
);

export default FormInput;

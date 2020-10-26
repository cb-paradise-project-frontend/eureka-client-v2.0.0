import React from 'react';
import classNames from 'classnames/bind';

import styles from './Input.module.scss';
import ErrorMessage from '../ErrorMessage';
import Button from '../Button';

const cx = classNames.bind(styles);

const Input = ({
  label,
  name,
  type,
  placeholder,
  validator,
  handleChange,
  isError,
  errorMessage,
  ...otherProps
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
      {isError && errorMessage &&
        <ErrorMessage className={styles.error_message_wrapper}>
          {errorMessage}
        </ErrorMessage>
      }
    </div>
  );
};

const Search = ({
  placeholder, handleChange, onSubmit,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} >
      <div className={styles.search_wrapper} >
        <input
          className={styles.search}
          placeholder={placeholder}
          onChange={({ target: { value } }) => handleChange(value)}
        />
        <Button.SearchIcon onClick={handleSubmit} />
      </div>
    </form>
  );
};

Input.Search = Search;

export default Input;

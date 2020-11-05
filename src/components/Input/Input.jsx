import React from 'react';
import classNames from 'classnames/bind';

import styles from './Input.module.scss';
import ErrorMessage from '../ErrorMessage';
import Button from '../Button';

const cx = classNames.bind(styles);

function Naked({
  validator,
  handleChange,
  ...otherProps
}) {
  const inputHandler = ({ target: { value } }) => {
    const validInput = validator ? validator(value) : value;
    handleChange(validInput);
  };

  return (
    <input
      className={styles.naked}
      onChange={inputHandler}
      {...otherProps}
    />
  );
}

const Input = ({
  label,
  isError,
  errorMessage,
  displayValue,
  ...otherProps
}) => (
  <div className={styles.input_wrapper} >
    {label
      && <label className={styles.label} >{label}</label>
    }
    <Naked
      className={cx({
        input: true,
        error_input: isError,
      })}
      {...otherProps}
      value={displayValue}
    />
    {isError && errorMessage &&
      <ErrorMessage className={styles.error_message_wrapper}>
        {errorMessage}
      </ErrorMessage>
    }
  </div>
);

const Search = ({
  onSubmit, ...otherProps
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} >
      <div className={styles.search_wrapper} >
        <Naked
          className={styles.search}
          {...otherProps}
        />
        <Button.SearchIcon onClick={handleSubmit} />
      </div>
    </form>
  );
};

Input.Search = Search;
Input.Naked = Naked;

export default Input;

import React from 'react';

import styles from './Button.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Button = ({
  children, handleSubmit, isGoogle, isDisabled, ...otherProps
}) => (
  <button
    className={cx({
      button: true,
      google: isGoogle,
    })}
    disabled={isDisabled}
    onClick={handleSubmit}
  >
    {children}
  </button>
);

export default Button;

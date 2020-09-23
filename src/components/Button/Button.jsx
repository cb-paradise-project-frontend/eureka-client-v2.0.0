import React from 'react';
import classNames from 'classnames/bind';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);

const Button = ({
  children, onClick, isGoogle, isDisabled, ...otherProps
}) => (
  <button
    className={cx({
      button: true,
      google: isGoogle,
    })}
    disabled={isDisabled}
    onClick={onClick}
    {...otherProps}
  >
    {children}
  </button>
);

export default Button;

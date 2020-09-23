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

const CloseIcon = ({ onClick }) => (
  <button
    className={styles.close_icon}
    onClick={onClick}
  >
    <i className="ri-close-fill ri-2x"/>
  </button>
);

Button.CloseIcon = CloseIcon;

export default Button;

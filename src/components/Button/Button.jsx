import React from 'react';
import classNames from 'classnames/bind';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);

const Button = ({
  children, onClick, color, isDisabled, ...otherProps
}) => (
  <button
    className={cx(
      'button',
      {
        green: 'green',
        blue: 'blue',
        'light-blue': 'light-blue',
        red: 'red',
        pink: 'pink',
      }[color] || 'green',
    )}
    disabled={isDisabled}
    onClick={onClick}
    {...otherProps}
  >
    {children}
  </button>
);

const IconButton = ({ onClick, children }) => (
  <button
    className={styles.icon_button}
    onClick={onClick}
  >
    {children}
  </button>
);

const CloseIcon = ({ onClick }) => (
  <IconButton
    className={styles.close_icon}
    onClick={onClick}
  >
    <i className="ri-close-fill ri-xl"/>
  </IconButton>
);

const BackIcon = ({ onClick }) => (
  <IconButton
    className={styles.back_icon}
    onClick={onClick}
  >
    <i className="ri-arrow-left-line ri-xl" />
  </IconButton>
);

Button.CloseIcon = CloseIcon;
Button.BackIcon = BackIcon;

export default Button;

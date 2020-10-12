import React from 'react';
import classNames from 'classnames/bind';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);

const Button = ({
  children, onClick, color, size, long, isDisabled, ...otherProps
}) => (
  <button
    className={cx(
      'button',
      { long },
      {
        green: 'green',
        blue: 'blue',
        'light-blue': 'light-blue',
        red: 'red',
        pink: 'pink',
        transparent: 'transparent',
        transparentActive: 'transparentActive',

      }[color] || 'green',
      {
        small: 'small',
        medium: 'medium',
        large: 'large',
      }[size] || 'medium',
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
  <IconButton onClick={onClick} >
    <i className="ri-close-fill ri-xl"/>
  </IconButton>
);

const BackIcon = ({ onClick }) => (
  <IconButton onClick={onClick} >
    <i className="ri-arrow-left-line ri-xl" />
  </IconButton>
);

const SearchIcon = ({ onClick }) => (
  <IconButton onClick={onClick} >
    <div className={styles.search_icon_wrapper} >
      <i className="ri-search-line" />
    </div>
  </IconButton>
);

const Text = ({ onClick, children, color }) => (
  <button
    onClick={onClick}
    className={cx(
      'text_button',
      {
        white: 'white',
        grey: 'grey',
      }[color] || 'grey',
    )}
  >
    {children}
  </button>
);

Button.CloseIcon = CloseIcon;
Button.BackIcon = BackIcon;
Button.SearchIcon = SearchIcon;
Button.Text = Text;

export default Button;

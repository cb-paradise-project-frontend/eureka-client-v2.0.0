import React from 'react';

import styles from './Button.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Button = ({children, handleSubmit, isGoogle, expired, ...otherProps}) => {
  return (
    <button
      className={cx({
        button: true,
        google: isGoogle,
        expired: expired
      })}
      onClick={handleSubmit}
    >
      {children}
    </button>
  );
}

export default Button;

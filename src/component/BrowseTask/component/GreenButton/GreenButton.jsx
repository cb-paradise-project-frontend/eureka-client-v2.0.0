import React from 'react';
import classNames from 'classnames/bind';

import styles from './GreenButton.module.scss';

export default function GreenButton({ label, expired }) {
  const expireLabel = 'Expired';
  const buttonLabel = (expired) ? expireLabel : label;

  const cx = classNames.bind(styles);

  return (
    <button className = {cx({
      button: true,
      expired: expired === true,  
    })}>
      {buttonLabel}
    </button>
  );
}


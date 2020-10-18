import React from 'react';
import classNames from 'classnames/bind';

import styles from './ProfileItem.module.scss';

const cx = classNames.bind(styles);

const checkIcon = String.fromCharCode(10003);
const arrowIcon = String.fromCharCode(10095);

export default function ProfileItem({
  itemName, handleClick, filled, statusLabel,
}) {

  const title = `Provide your ${itemName}`;
  const prefix = filled ? 'Update' : 'Enter';
  const label = statusLabel || `${prefix} your ${itemName}`;

  return (
    <div className={styles.profile_item} >
      <div className={styles.title} >
        {title}
      </div>
      <button
        className={styles.button}
        onClick={handleClick}
      >
        <div className={cx({
          check_icon: true,
          checked: filled,
        })}>
          {checkIcon}
        </div>
        <div className={styles.label} >
          {label}
        </div>
        <div className={styles.arrow_icon} >
          {arrowIcon}
        </div>
      </button>
    </div>
  );
}

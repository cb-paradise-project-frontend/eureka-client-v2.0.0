import React from 'react';
import classNames from 'classnames/bind';

import styles from './ProfileItem.module.scss';

export default function ProfileItem({
  itemName, handleClick, checked, statusLabel,
}) {
  const checkIcon = String.fromCharCode(10003);
  const arrowIcon = String.fromCharCode(10095);

  const title = `Provide your ${itemName}`;
  const prefix = checked ? 'Update' : 'Enter';
  const label = statusLabel || `${prefix} your ${itemName}`;

  const cx = classNames.bind(styles);

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
          checked: checked === true,
        })} >
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

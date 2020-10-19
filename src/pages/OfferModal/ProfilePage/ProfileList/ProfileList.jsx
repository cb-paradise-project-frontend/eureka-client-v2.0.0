import React from 'react';
import classNames from 'classnames/bind';

import styles from './ProfileList.module.scss';

import createBirthdayLabel from './utils/createBirthdayLabel';
import FORM from '../form';

const cx = classNames.bind(styles);

const checkIcon = String.fromCharCode(10003);
const arrowIcon = String.fromCharCode(10095);

function ProfileItem({
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

export default function ProfileList({
  formData, clickHandlers,
}) {
  return (
    <div className={styles.profile_list_wrapper} >
      {Object.keys(FORM).map((key) => {
        const { label } = FORM[key];
        const value = formData[key];

        const statusLabel = {
          birthday: createBirthdayLabel(value),
          mobile: value,
        }[key] || null;

        return (
          <ProfileItem
            itemName={label}
            handleClick={clickHandlers[key]}
            statusLabel={statusLabel}
            filled={!!value}
            key={key}
          />
        );
      })}
    </div>
  );
}

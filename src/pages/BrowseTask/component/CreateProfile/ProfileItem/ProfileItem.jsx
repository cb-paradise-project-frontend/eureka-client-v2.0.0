import React from 'react';

import styles from './ProfileItem.module.scss';

export default function ProfileItem({ itemName, handleClick }) {
  const checkIcon = String.fromCharCode(10003); 
  const arrowIcon = String.fromCharCode(10095);

  const title = `Provide your ${itemName}`;
  const label = `Update your ${itemName}`;

  return (
    <div className={styles.profile_item} >
      <div className={styles.title} >
        {title}
      </div>
      <button 
        className={styles.button}
        onClick={handleClick} 
      >
        <div className={styles.check_icon} >
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
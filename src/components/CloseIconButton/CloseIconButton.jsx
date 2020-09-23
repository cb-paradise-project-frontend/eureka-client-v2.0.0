import React from 'react';

import styles from './CloseIconButton.module.scss';

export default function CloseIconButton({ onClick }) {
  return (
    <button className={styles.button} onClick={onClick}>
      <i className="ri-close-fill ri-2x"></i>
    </button>
  );
}
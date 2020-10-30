import React from 'react';

import styles from './MenuMask.module.scss';

export default function MenuMask({ children, onClick }) {
  return (
    <div
      className={styles.menu_mask}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

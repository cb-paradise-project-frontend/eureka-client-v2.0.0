import React from 'react';

import styles from './MenuMask.module.scss';

export default function MenuMask({ children }) {
  return (
    <div className={styles.menu_mask}>
      {children}
    </div>
  );
}

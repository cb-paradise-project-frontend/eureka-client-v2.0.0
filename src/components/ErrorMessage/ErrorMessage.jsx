import React from 'react';

import styles from './ErrorMessage.module.scss';

export default function ErrorMessage({ children }) {
  return (
    <div className={styles.message}>
      {children}
    </div>
  );
};
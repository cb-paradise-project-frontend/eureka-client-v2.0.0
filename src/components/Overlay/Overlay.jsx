import React from 'react';

import styles from './Overlay.module.scss';

const Overlay = ({ children }) => (
  <div className={styles.container}>
    {children}
  </div>
);

export default Overlay;

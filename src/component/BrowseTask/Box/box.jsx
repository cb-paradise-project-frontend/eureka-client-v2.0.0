import React from 'react';

import styles from './box.module.scss';

export default function Box() {
  return (
    <ul className={styles.navItems}>
      <li className={styles.navItem}>
        <div className={styles.button}>
          button
          <div className={styles.dropdown}>
            dropdown content
          </div>
        </div>
      </li>
    </ul>
  );
};

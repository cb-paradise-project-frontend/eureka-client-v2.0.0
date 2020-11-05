import React from 'react';

import styles from './Navigation.module.scss';

import Public from './Public';
import Private from './Private';

function Navigation() {
  return (
    <nav className={styles.navBar}>
      <div className={styles.navWebMenu}>
        <div className={styles.left}>
          <Public />
        </div>

        <div className={styles.right}>
          <Private />
        </div>
      </div>
    </nav>
  )
}

export default Navigation;
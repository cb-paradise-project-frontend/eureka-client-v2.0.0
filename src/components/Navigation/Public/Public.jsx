import React from 'react';

import styles from './Public.module.scss';

import NavigationMobile from '../components/NavigationMobile';
import NavigationWeb from '../components/NavigationWeb';

function Public() {
  return (
    <React.Fragment>
      <div className={styles.menuMobile}>
        <NavigationMobile />
      </div>

      <div className={styles.web}>
        <NavigationWeb />
      </div>
    </React.Fragment>
  );
}

export default Public;
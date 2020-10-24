import React, { Component } from 'react';

import styles from './Private.module.scss';

// import NavigationMobile from '../components/NavigationMobile';
import NavigationWebPrivate from '../components/NavigationWebPrivate';


function Private() {
  return (
    <React.Fragment>
      {/* <div className={styles.menuMobile}>
        <NavigationMobile />
      </div> */}

      <div className={styles.web}>
        <NavigationWebPrivate />
      </div>
    </React.Fragment>
  );
}

export default Private;
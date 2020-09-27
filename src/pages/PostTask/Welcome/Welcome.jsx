import React from 'react';

import styles from '../PostTask.module.scss';

import WelcomeImg from './WelcomeImg';
import WelcomeMsg from './WelcomeMsg';

function Welcome() {
  return (
    <React.Fragment>
      
      <div className={styles.main}>
        <WelcomeImg />
        <WelcomeMsg />
      </div>
    </React.Fragment>
  )
}

export default Welcome;


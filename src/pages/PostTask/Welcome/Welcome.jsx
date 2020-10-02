import React from 'react';

import styles from '../PostTask.module.scss';

import WelcomeImg from './components/WelcomeImg';
import WelcomeMsg from './components/WelcomeMsg';

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


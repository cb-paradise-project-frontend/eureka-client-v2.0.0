import React from 'react';

import styles from '../PostTaskForm.module.scss';

import WelcomeImg from './WelcomeImg';
import WelcomeMsg from './WelcomeMsg';

function FirstScreen() {
  return (
    <React.Fragment>
      
      <div className={styles.main}>
        <WelcomeImg />
        <WelcomeMsg />
      </div>
    </React.Fragment>
  )
}

export default FirstScreen;


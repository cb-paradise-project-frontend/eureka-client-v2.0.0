import React from 'react';

import styles from '../../PostTaskForm.module.scss';

function WelcomeMsg() {
  return (
    <React.Fragment>
      <h2 className={styles.IndividualHeading}> 
        Start getting offers in no time 
      </h2>
      <p className={styles.InitialMsg}> 
        We're just going to ask a few questions to help you find the right Tasker - it'll only take a few minutes! 
      </p>
    </React.Fragment>
  )
}

export default WelcomeMsg;


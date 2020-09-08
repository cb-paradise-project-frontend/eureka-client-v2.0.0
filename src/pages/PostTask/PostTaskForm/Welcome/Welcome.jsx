import React from 'react';

import styles from '../PostTaskForm.module.scss';

import PostTaskTop from '../../PostTaskTop';
import WelcomeImg from './WelcomeImg';
import WelcomeMsg from './WelcomeMsg';
import Button from '../../Button';

function FirstScreen ({
  handleNextClick,
}) {
  return (
    <React.Fragment>
      <PostTaskTop />
      <div className={styles.main}>
        <WelcomeImg />
        <WelcomeMsg />
      </div>
      <div className={styles.bottom}>
        <Button handleNextClick={handleNextClick}>
          Next
        </Button>
      </div>
    </React.Fragment>
  )
}

export default FirstScreen;


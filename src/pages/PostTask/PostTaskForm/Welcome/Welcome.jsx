import React from 'react';

import styles from '../PostTaskForm.module.scss';

import PostTaskTop from '../../PostTaskTop';
import WelcomeImg from './WelcomeImg';
import WelcomeMsg from './WelcomeMsg';
import PostTaskButton from '../../PostTaskButton';

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
        <PostTaskButton handleClick={handleNextClick}>
          Next
        </PostTaskButton>
      </div>
    </React.Fragment>
  )
}

export default FirstScreen;


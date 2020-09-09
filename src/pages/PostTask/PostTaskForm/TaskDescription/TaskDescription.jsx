import React from 'react';

import styles from '../PostTaskForm.module.scss';

import PostTaskTop from '../../PostTaskTop';
import PostTaskButton from '../../PostTaskButton';

function TaskDescription({
  jobTitleInput,
  jobDetailsInput,
  handleNextClick,
  handleBackClick,
}) {
    return (
      <React.Fragment>
        <PostTaskTop> Tell us what you need done? </PostTaskTop>
        <div className={styles.main}>
          {jobTitleInput}
          {jobDetailsInput}
        </div>
        <div className={styles.bottom}>
          <PostTaskButton handleClick={handleBackClick}>
            Back
          </PostTaskButton>
          <PostTaskButton handleClick={handleNextClick}> 
            Next 
          </PostTaskButton>
        </div>
      </React.Fragment>
    )
  }

export default TaskDescription;


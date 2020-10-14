import React from 'react';
import JobCategory from './components/JobCategory';
import styles from '../../PostTask.module.scss';

function TaskDescription({
  jobTitleInput,
  jobDetailsInput,
}) {
    return (
      <React.Fragment>
        <div className={styles.main}>
          {jobTitleInput}
          <JobCategory />
          {jobDetailsInput}
          
        </div>
      </React.Fragment>
    )
  }

export default TaskDescription;


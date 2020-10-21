import React from 'react';
import styles from '../../PostTask.module.scss';

function TaskDescription({
  jobTitleInput,
  jobDetailsInput,
  jobCategoryInput,
}) {
    return (
      <React.Fragment>
        <div className={styles.main}>
          {jobTitleInput}
          {jobCategoryInput}
          {jobDetailsInput}
        </div>
      </React.Fragment>
    )
  }

export default TaskDescription;


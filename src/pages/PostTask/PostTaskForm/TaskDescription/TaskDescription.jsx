import React from 'react';

import styles from '../PostTaskForm.module.scss';

function TaskDescription({
  jobTitleInput,
  jobDetailsInput,
}) {
    return (
      <React.Fragment>
        <div className={styles.main}>
          {jobTitleInput}
          {jobDetailsInput}
        </div>
      </React.Fragment>
    )
  }

export default TaskDescription;


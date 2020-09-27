import React from 'react';

import styles from '../PostTask.module.scss';

import TaskDeliveryMethod from './TaskDeliveryMethod';

function TaskLocationAndTime({
  taskDatePicker
}) {

  return (
    <React.Fragment>
      <div className={styles.main}>
        <h2 className={styles.other_heading}> 
          Where do you need it done? 
        </h2>
        <TaskDeliveryMethod />
        <h2 className={styles.other_heading}> 
          When do you need it done? 
        </h2>
        <div className={styles.date_box}>
          {taskDatePicker}
        </div>
        </div>
    </React.Fragment>
  )
  }
export default TaskLocationAndTime;


import React from 'react';

import styles from '../PostTaskForm.module.scss';

import PostTaskTop from '../../PostTaskTop';
import TaskDeliveryMethod from './TaskDeliveryMethod';
import PostTaskButton from '../../PostTaskButton';


function TaskLocationAndTime({
  handleBackClick,
  handleNextClick,
  taskDatePicker
}) {

  return (
    <React.Fragment>
      <PostTaskTop> Say where & when </PostTaskTop>
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
        <div className={styles.bottom}>
          <PostTaskButton handleClick={handleBackClick} >
            Back
          </PostTaskButton>
          <PostTaskButton handleClick={handleNextClick}> 
            Next
          </PostTaskButton>
        </div>
    </React.Fragment>
  )
  }
export default TaskLocationAndTime;


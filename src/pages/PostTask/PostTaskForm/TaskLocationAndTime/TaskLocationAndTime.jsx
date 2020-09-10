import React from 'react';

import styles from '../PostTaskForm.module.scss';
import 'react-datepicker/dist/react-datepicker.css';

import PostTaskTop from '../../PostTaskTop';
import TaskRadio from '../../TaskRadio';
import PostTaskButton from '../../PostTaskButton';
import TaskDatePicker from './TaskDatePicker';
import ErrorHint from '../../ErrorHint';

function TaskLocationAndTime({
  startDate,
  handleDateValue,
  handleBackClick,
  handleNextClick,

}) {
  // constructor(props){
  //   super(props);

  //   this.onDateChange = this.onDateChange.bind(this);
  // }
 
  function onDateChange(event) {
    return handleDateValue(event);
  }
  return (
    <React.Fragment>
      <PostTaskTop> Say where & when </PostTaskTop>
      <div className={styles.main}>
        <h2 className={styles.other_heading}> 
          Where do you need it done? 
        </h2>
        <div className={styles.task_radio_box}>
          <div className={styles.piece}>
            <TaskRadio
              radioType={"In Person"}
              radioHint={"Select this if you need the Tasker physically there."}
              isChecked={true} 
            />
          </div>
          <div className={styles.piece}>
            <TaskRadio
              radioType={"Online"}
              radioHint={"Select this if the Tasker can do it from home."}
              isChecked={false}
            />
          </div>
        </div>
        <h2 className={styles.other_heading}> 
          When do you need it done? 
        </h2>
        <div className={styles.date_box}>
          <TaskDatePicker 
            startDate={startDate}
            onDateChange={onDateChange}
          />
        </div>
        { startDate == null ?
          <ErrorHint>
            Please select the date you would like the task to be done 
          </ErrorHint>
          :
          null
        }
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


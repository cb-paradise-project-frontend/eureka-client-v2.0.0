import React, { useState } from 'react';

import styles from '../PostTask.module.scss';

import TaskDeliveryMethod from './TaskDeliveryMethod';

function TaskLocationAndTime({
  taskDatePicker,
  taskPlace,
  handleAddressQuery,
  onRadioCheck,
  method,
}) {

  const handleOnlineRadioClick = () => {
    onRadioCheck("online");
    handleAddressQuery("online");
  }

  const handleOfflineRadioClick = () => {
    onRadioCheck("offline");
    handleAddressQuery(null);
  }

  return (
    <React.Fragment>
      <div className={styles.main}>
        <h2 className={styles.other_heading}> 
          Where do you need it done? 
        </h2>
        <TaskDeliveryMethod 
          handleOnlineRadioClick={handleOnlineRadioClick}
          handleOfflineRadioClick={handleOfflineRadioClick}
          method={method}
        />
        <div className={styles.date_box}>
        {method === "offline" && taskPlace}
        </div>
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


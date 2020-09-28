import React from 'react';

import styles from './TaskDeliveryMethod.module.scss';//TODO try styled component

import Radio from '../../../../components/Radio';


function TaskDeliveryMethod({
  handleClick,
}) {
  return (
    <React.Fragment>
    <div className={styles.box}>
      <div className={styles.piece}>
        <Radio
          radioName={"taskRadio"}
          radioTitle={"In Person"}
          radioHint={"Select this if you need the Tasker physically there."}
          isChecked={true} 
          handleClick={handleClick}
        />
      </div>
      <div className={styles.piece}>
        <Radio
          radioName={"taskRadio"}
          radioTitle={"Online"}
          radioHint={"Select this if the Tasker can do it from home."}
          isChecked={false}
          handleClick={handleClick}
        />
      </div>
      </div>
    </React.Fragment>
  )
}

export default TaskDeliveryMethod;
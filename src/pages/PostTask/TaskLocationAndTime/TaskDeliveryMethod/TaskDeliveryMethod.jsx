import React, { useState } from 'react';

import styles from './TaskDeliveryMethod.module.scss';//TODO try styled component

import Radio from '../../../../components/Radio';


function TaskDeliveryMethod({
  handleOnlineRadioClick,
  handleOfflineRadioClick,
}) {

  const [ select, setSelect ] = useState();

  const handleOnlineClick = () => {
    setSelect(false);
    handleOnlineRadioClick();
  }
console.log(select);
  const handleOfflineClick = () => {
    setSelect(true);
    handleOfflineRadioClick();
  }
  return (
    <React.Fragment>
    <div className={styles.box}>
      <div className={styles.piece}>
        <Radio
          radioName={"taskRadio"}
          radioTitle={"In Person"}
          radioHint={"Select this if you need the Tasker physically there."}
          isChecked={select} 
          handleClick={handleOfflineClick}
        />
      </div>
      <div className={styles.piece}>
        <Radio
          radioName={"taskRadio"}
          radioTitle={"Online"}
          radioHint={"Select this if the Tasker can do it from home."}
          isChecked={!select}
          handleClick={handleOnlineClick}
        />
      </div>
      </div>
    </React.Fragment>
  )
}

export default TaskDeliveryMethod;
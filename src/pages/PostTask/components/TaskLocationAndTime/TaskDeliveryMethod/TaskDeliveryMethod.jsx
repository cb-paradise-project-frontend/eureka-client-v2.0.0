import React from 'react';

import styles from './TaskDeliveryMethod.module.scss';

import Radio from '../../../../../components/Radio';

function TaskDeliveryMethod({
  handleOnlineRadioClick,
  handleOfflineRadioClick,
  method,
}) {

  return (
    <React.Fragment>
    <div className={styles.box}>
      <div className={styles.piece}>
        <Radio
          radioName={"taskRadio"}
          radioTitle={"In Person"} //offline
          id={"offline"}
          radioHint={"Select this if you need the Tasker physically there."}
          isChecked={(method === "offline")} 
          handleClick={handleOfflineRadioClick}
        />
      </div>
      <div className={styles.piece}>
        <Radio
          radioName={"taskRadio"}
          radioTitle={"Online"}
          isChecked={(method === "online")}
          radioHint={"Select this if the Tasker can do it from home."}
          handleClick={handleOnlineRadioClick}
        />
      </div>
      </div>
    </React.Fragment>
  )
}

export default TaskDeliveryMethod;
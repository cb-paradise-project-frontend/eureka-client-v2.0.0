import React, { useState } from 'react';

import styles from './Offered.scss';

import TaskCard from '../../../../../components/TaskCard';

export default function Offered ({
  offeredTask,
}) {
  const [currentTaskId, selectTask] = useState();

  if (!offeredTask) return null;

  const handleClickCreator = (taskId) => () => {
    selectTask(taskId);
  };

  const taskList = offeredTask && offeredTask.map((task) => (
    <div className={styles.card_wrapper} key={task.id} >
      <TaskCard
        task={task}
        onClick={handleClickCreator(task.id)}
      />
    </div>
  ));

   console.log(taskList)

  return (
    <div className={styles.offered_wrapper}>
    {
      !offeredTask ? (
        <React.Fragment>
          <span>You haven't make any offer yet</span>
        </React.Fragment>
      ) : (
        <div>
          {taskList}
        </div>
      )
    }
    </div>
  );
}

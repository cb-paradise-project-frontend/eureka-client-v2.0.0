import React from 'react';

import styles from './Posted.module.scss';

import PostTaskButton from '../../../../../components/PostTaskButton';
import TaskCard from '../../../../../components/TaskCard';

const Posted = ({
  postedTask,
}) => {
  console.log(postedTask);

  const taskList = postedTask && postedTask.map((task) => (
    <TaskCard
      key={task.id}
      task={task}
    />
  ));

  return (
    <div className={styles.container}>
    {
      !postedTask ? (
        <React.Fragment>
          <span>You have not post any task yet</span>
          <PostTaskButton />
        </React.Fragment>
      ) : (
        <div className={styles.list_wrapper}>
          {taskList}
        </div>
      )
    }
    </div>
  );
}

export default Posted;

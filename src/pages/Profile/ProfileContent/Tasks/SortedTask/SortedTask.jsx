import React, { useState } from 'react';

import styles from './SortedTask.module.scss';

import PostTaskButton from '../../../../../components/PostTaskButton';
import TaskCard from '../../../../../components/TaskCard';
import TaskModal from './TaskModal';

export default function Posted({ postedTask, loadTask }) {
  const [currentTaskId, selectTask] = useState();

  if (!postedTask) return null;

  const handleClickCreator = (taskId) => () => {
    selectTask(taskId);
  };

  const taskList = postedTask && postedTask.map((task) => (
    <div className={styles.card_wrapper} key={task.id} >
      <TaskCard
        task={task}
        onClick={handleClickCreator(task.id)}
      />
    </div>
  ));

  const currentTask = postedTask.find((task) => task.id === currentTaskId);

  return (
    <>
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
      {currentTask &&
        <TaskModal
          task={currentTask}
          loadTask={loadTask}
          onRequestClose={() => selectTask('')}
        />
      }
    </>
  );
}

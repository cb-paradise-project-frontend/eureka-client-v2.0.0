import React, { useState } from 'react';

import styles from './SortedTask.module.scss';

import PostTaskButton from '../../../../../components/PostTaskButton';
import TaskCard from '../../../../../components/TaskCard';
import TaskModal from './TaskModal';

export default function Posted({ sortedTask, loadTask }) {
  const [currentTaskId, selectTask] = useState();

  if (!sortedTask) return null;

  const handleClickCreator = (taskId) => () => {
    selectTask(taskId);
  };

  const taskList = sortedTask && sortedTask.map((task) => (
    <div className={styles.card_wrapper} key={task.id} >
      <TaskCard
        task={task}
        onClick={handleClickCreator(task.id)}
      />
    </div>
  ));

  const currentTask = sortedTask.find((task) => task.id === currentTaskId);

  return (
    <>
      <div className={styles.container}>
      {
        !sortedTask ? (
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

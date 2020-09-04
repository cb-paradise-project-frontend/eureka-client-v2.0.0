import React from 'react';

import styles from './TaskList.module.scss';

import TaskListItem from './TaskListItem';

function TaskList({ taskList }) {
  const displayedTasks = taskList.map((task) => 
    <TaskListItem
      key = {task.id}
      task = {task}
    />
  );

  return(
    <div className = {styles.task_list}>
      {displayedTasks}
    </div>
  );
}

export default TaskList;
import React from 'react';

import styles from './TaskList.module.scss';

import TaskListItem from './TaskListItem';

export default function TaskList({ taskList }) {
  const displayedTasks = taskList.map((task) => 
    <TaskListItem
      key = {task.id}
      task = {task}
    />
  );

  return(
    <div className = {styles.task_list} >
      {displayedTasks}
    </div>
  );
};
import React from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import TaskCard from '../../../components/TaskCard';

import styles from './TaskList.module.scss';

export default function TaskList({
  taskList,
  handleScroll,
}) {
  const history = useHistory();
  const { path } = useRouteMatch();

  return (
    <div
      id="task-list"
      className = {styles.task_list}
      onScroll={handleScroll}
    >
      {taskList.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          onClick={() => history.push(`${path}/${task.id}`)}
        />
      ))}
    </div>
  );
}

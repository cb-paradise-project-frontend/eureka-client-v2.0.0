import React from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import className from 'classnames/bind';

import styles from './TaskList.module.scss';

import Avatar from '../../../components/Avatar';

const cx = className.bind(styles);

function TaskListItem({
  onClick,
  task: {
    title, status, budget, postedBy, location, due,
  },
}) {
  return (
    <div
      className={cx(
        'task_list_item',
        status.toLowerCase(),
      )}
      onClick = {onClick}
    >
      <div className={styles.header} >
        <div className={styles.title} >
          {title}
        </div>
        <div className={styles.budget} >
          ${budget}
        </div>
      </div>
      <div className={styles.content} >
        <div className={styles.avatar_container} >
          <Avatar avatarUrl={postedBy.avatar || null} />
        </div>
        <div className={styles.location} >
          {location}
        </div>
        <div className={styles.due} >
          {new Date(due).toDateString()}
        </div>
      </div>
      <div className={styles.footer} >
        <div className={styles.status} >
          {status}
        </div>
      </div>
    </div>
  );
}

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
        <TaskListItem
          key={task.id}
          task={task}
          onClick={() => history.push(`${path}/${task.id}`)}
        />
      ))}
    </div>
  );
}

import React, { useState } from 'react';
import classNames from 'classnames/bind';

import styles from './TaskList.module.scss';
import Avatar from '../../../components/Avatar';
import TaskDetail from '../TaskDetail';

const cx = classNames.bind(styles);

const TaskListItem = ({
  onClick,
  task: {
    title, status, budget, postedBy, location, due,
  },
}) => (
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
          {due}
        </div>
      </div>
      <div className={styles.footer} >
        <div className={styles.status} >
          {status}
        </div>
      </div>
    </div>
);

export default function TaskList({ taskList, onAskQuestion }) {
  const [currentTask, selectTask] = useState(taskList[0]);

  const displayedTasks = taskList.map((task) => (
    <TaskListItem
      key={task.id}
      task={task}
      onClick={() => selectTask(task)}
    />
  ));

  return (
    <div className={styles.task_list_wrapper}>
      <div className = {styles.task_list} >
        {displayedTasks}
      </div>
      <div className={styles.task_detail_wrapper} >
        <TaskDetail
          task={currentTask}
          onAskQuestion={onAskQuestion}
        />
      </div>
    </div>
  );
}

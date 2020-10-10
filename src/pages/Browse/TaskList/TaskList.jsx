import React from 'react';
import classNames from 'classnames/bind';
import { useHistory, useRouteMatch } from 'react-router-dom';

import styles from './TaskList.module.scss';
import Avatar from '../../../components/Avatar';

const cx = classNames.bind(styles);

export default function TaskList({ taskList }) {
  const history = useHistory();

  const TaskListItem = ({
    task: {
      title, status, budget, postedBy, location, due, id,
    },
  }) => {
    const match = useRouteMatch();

    const handleClick = () => {
      history.push(`${match.url}/${id}`);
    };

    return (
      <div
        className={cx(
          'task_list_item',
          status.toLowerCase(),
        )}
        onClick = {handleClick}
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
  };

  const displayedTasks = taskList.map((task) => (
    <TaskListItem key={task.id} task ={task} />
  ));

  return (
    <div className = {styles.task_list} >
      {displayedTasks}
    </div>
  );
}

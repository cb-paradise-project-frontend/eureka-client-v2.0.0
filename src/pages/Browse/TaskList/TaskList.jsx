import React from 'react';
import classNames from 'classnames/bind';
import { Redirect, Route, Switch, useHistory, useRouteMatch } from 'react-router-dom';

import styles from './TaskList.module.scss';

import TaskDetail from '../TaskDetail';
import Avatar from '../../../components/Avatar';

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

export default function TaskList({ taskList }) {
  const { path } = useRouteMatch();
  const history = useHistory();

  const displayedTasks = taskList.map((task) => (
    <TaskListItem
      key={task.id}
      task={task}
      onClick={() => history.push(`${path}/${task.id}`)}
    />
  ));

  const defaultTask = taskList.length && taskList[0].id;

  return (
    <div className={styles.task_list_wrapper}>
      <div className = {styles.task_list} >
        {displayedTasks}
      </div>
      <Switch>
        <Route path={`${path}/:taskId`} >
          <div className={styles.task_detail_wrapper} >
            <TaskDetail taskList={taskList} />
          </div>
        </Route>
        <Redirect to={`${path}/${defaultTask}`} />
      </Switch>
    </div>
  );
}

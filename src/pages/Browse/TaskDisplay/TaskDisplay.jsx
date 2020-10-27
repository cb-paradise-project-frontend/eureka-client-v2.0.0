import React, { useEffect } from 'react';
import classNames from 'classnames/bind';
import { Redirect, Route, Switch, useHistory, useRouteMatch } from 'react-router-dom';

import styles from './TaskDisplay.module.scss';

import TaskDetail from '../TaskDetail';
import Avatar from '../../../components/Avatar';

const cx = classNames.bind(styles);

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
}

export default function TaskDisplay({
  taskList,
  nextPage,
  lastScroll,
  saveScroll,
}) {
  const history = useHistory();
  const { path } = useRouteMatch();

  useEffect(() => {
    const taskListNode = document.getElementById('task-list');
    if (lastScroll) taskListNode.scrollTo(null, lastScroll);
  }, [lastScroll]);

  const handleScroll = (event) => {
    event.preventDefault();
    const {
      scrollTop,
      scrollHeight,
      clientHeight,
    } = event.target;

    if (scrollHeight - scrollTop - clientHeight < 1) {
      saveScroll(scrollTop);
      nextPage();
    }
  };

  const defaultTask = taskList.length && taskList[0].id;

  return (
    <div className={styles.task_list_wrapper}>
      <div
        id="task-list"
        className = {styles.task_list}
        onScroll={handleScroll}
        scrollTop={lastScroll}
      >
        {taskList.map((task) => (
          <TaskListItem
            key={task.id}
            task={task}
            onClick={() => history.push(`${path}/${task.id}`)}
          />
        ))}
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

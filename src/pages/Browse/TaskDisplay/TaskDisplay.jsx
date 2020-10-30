import React, { useEffect } from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';

import styles from './TaskDisplay.module.scss';

import TaskDetail from '../TaskDetail';
import TaskList from '../TaskList';

export default function TaskDisplay({
  taskList,
  nextPage,
  lastScroll,
  saveScroll,
}) {
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
      saveScroll(scrollTop - 5);
      nextPage();
    }
  };

  const defaultTask = taskList.length && taskList[0].id;

  return (
    <div className={styles.container}>
      <TaskList
        taskList={taskList}
        handleScroll={handleScroll}
      />
      <Switch>
        <Route path={`${path}/:taskId`} >
          <div className={styles.right} >
            <TaskDetail taskList={taskList} />
          </div>
        </Route>
        <Redirect to={`${path}/${defaultTask}`} />
      </Switch>
    </div>
  );
}

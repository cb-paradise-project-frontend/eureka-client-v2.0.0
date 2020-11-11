import React, { useEffect, useState } from 'react';
import { Redirect, Route, Switch, useHistory, useRouteMatch } from 'react-router-dom';
import className from 'classnames/bind';

import styles from './TaskDisplay.module.scss';

import TaskDetail from '../TaskDetail';
import TaskList from '../TaskList';
import Button from '../../../components/Button';

const cx = className.bind(styles);

export default function TaskDisplay({
  taskList,
  nextPage,
  lastScroll,
  saveScroll,
}) {
  const { path } = useRouteMatch();
  const { location } = useHistory();

  const [showList, toggleList] = useState(true);

  const [touched, setTouched] = useState(false);

  const handleToggleList = () => {
    toggleList((prevState) => !prevState);
  };

  const BackButton = () => (
    <div className={styles.back_button_wrapper} >
      <Button.Text
        onClick={handleToggleList}
        size="medium"
      >
        Back to List
      </Button.Text>
    </div>
  );

  useEffect(() => {
    if (touched) {
      toggleList(false)
    } else {
      setTouched(true)
    }
  }, [location]);

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
      <div className={cx({
        left: true,
        active: showList,
      })} >
        <TaskList
          taskList={taskList}
          handleScroll={handleScroll}
        />
      </div>
      <Switch>
        <Route path={`${path}/:taskId`} >
          <div className={cx({
            right: true,
            active: !showList,
          })} >
            <BackButton />
            <TaskDetail taskList={taskList} />
          </div>
        </Route>
        <Redirect to={`${path}/${defaultTask}`} />
      </Switch>
    </div>
  );
}

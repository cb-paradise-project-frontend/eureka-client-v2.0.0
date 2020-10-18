import React, { useContext, useEffect, useState } from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';

import styles from './Browse.module.scss';

import TaskList from './TaskList';
import TaskDetail from './TaskDetail';
import getTaskList from '../../apis/Task/getTaskList';
import askQuestion from '../../apis/Task/askQuestion';
import TaskMenu from './TaskMenu';
import { AuthContext } from '../../auth/Auth';
import useLoadingPage from '../../components/LoadingPage/useLoadingPage';

const testData = {
  title: 'Roof repair',
  status: 'OPEN',
  budget: '120',
  postedBy: {
    name: 'Tifa',
    avatar: '',
  },
  location: 'Kurunjang VIC 3337, Australia',
  due: 'Monday, 24th Aug 2020',
  description: `- remove existing bamboo fence - supply and install new fence (open for ideas)
- install synthetic turf
- landscaping design and install
- remove and upgrade existing waterfall feature into the pool`,
  comments: [],
};

function createData(size, data) {
  const dataArray = [];
  for (let i = 0; i < size; i += 1) {
    const newData = { ...data };
    newData.id = `${i}`;
    newData.questions = [];
    dataArray.push(newData);
  }
  return dataArray;
}

const tasks = createData(10, testData);
tasks[1].title = 'Wall repair';
tasks[1].status = 'ASSIGNED';
tasks[2].status = 'COMPLETED';
tasks[3].status = 'EXPIRED';

export default function Browse() {
  const [taskList, setTaskList] = useState([]);
  const [updateFlag, setUpdateFlag] = useState(false);
  const [filter, updateFilter] = useState('');

  const [LoadingMask, toggleLoadingMask, loadingStatus] = useLoadingPage();

  const { path } = useRouteMatch();

  const { currentUser } = useContext(AuthContext);

  const toggleUpdateFlag = () => {
    setUpdateFlag((prevFlag) => !prevFlag);
  };

  const loadTaskList = async () => {
    const newTaskList = await getTaskList(filter) || tasks;
    setTaskList(newTaskList);
  };

  const {
    keyword,
    maxPrice,
    minPrice,
  } = filter;

  useEffect(() => {
    loadTaskList();
  }, [
    updateFlag,
    keyword,
    maxPrice,
    minPrice,
  ]);

  useEffect(() => {
    if (taskList.length && loadingStatus === true) {
      toggleLoadingMask(false);
    }
  }, [taskList.length, loadingStatus]);

  const onAskQuestion = (taskId, input) => {
    askQuestion(currentUser, taskId, input);
    toggleUpdateFlag();
  };

  const defaultTaskId = taskList[0] && taskList[0].id;

  return (
    <LoadingMask>
      <div className={styles.browse_container} >
        <TaskMenu onFilterChange={updateFilter} />
        <div className={styles.browse} >
          <TaskList taskList={taskList} />
          <Switch>
            <Route path={`${path}/:taskId`} >
              <div className={styles.task_detail_wrapper} >
                <TaskDetail
                  taskList={taskList}
                  loadTaskList={loadTaskList}
                  onAskQuestion={onAskQuestion}
                />
              </div>
            </Route>
            <Redirect to={`${path}/${defaultTaskId}`} />
          </Switch>
        </div>
      </div>
    </LoadingMask>
  );
}

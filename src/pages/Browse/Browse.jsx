import React, { useEffect, useState } from 'react';
import { Redirect, Route, useRouteMatch } from 'react-router-dom';

import styles from './Browse.module.scss';

import TaskList from './TaskList';
import TaskDetail from './TaskDetail';
import getTaskList from '../../apis/getTaskList';
import askQuestion from '../../apis/askQuestion';
import TaskMenu from './TaskMenu/TaskMenu';

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

const testUserId = '5f7e8665b7edfa557c89dbdf';

export default function Browse() {
  const [taskList, setTaskList] = useState([]);
  const [updateFlag, setUpdateFlag] = useState(false);

  const [keyword, updateKeyword] = useState('');

  const { path } = useRouteMatch();

  const toggleUpdateFlag = () => {
    setUpdateFlag((prevFlag) => !prevFlag);
  };

  const loadTaskList = async (inputKeyword) => {
    // without backend
    // const newTaskList = tasks;

    // with backend
    const { data: { data } } = await getTaskList(inputKeyword);
    const newTaskList = data;

    setTaskList(newTaskList);
  };

  useEffect(() => {
    loadTaskList(keyword);
  }, [updateFlag, keyword]);

  const onAskQuestion = (taskId, input) => {
    askQuestion(testUserId, taskId, input);
    toggleUpdateFlag();
  };

  const defaultTaskId = taskList[0] && taskList[0].id;

  return (
    <>
      <Redirect to={`${path}/${defaultTaskId}`} />
      <div className={styles.browse_container} >
        <TaskMenu
          onKeywordChange={updateKeyword}
        />
        <div className={styles.browse} >
          <TaskList taskList={taskList} />
          <Route path={`${path}/:taskId`} >
            <TaskDetail
              taskList={taskList}
              onAskQuestion={onAskQuestion}
            />
          </Route>
        </div>
      </div>
    </>
  );
}

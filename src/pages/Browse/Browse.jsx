import React, { useContext, useEffect, useState } from 'react';

import styles from './Browse.module.scss';

import TaskList from './TaskList';
import getTaskList from '../../apis/Task/getTaskList';
import askQuestion from '../../apis/Task/askQuestion';
import TaskMenu from './TaskMenu';
import { AuthContext } from '../../auth/Auth';
import useLoadingPage from '../../components/LoadingPage/useLoadingPage';
import { LoadTaskProvider } from './TaskDetail/LoadTaskContext';

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

  const [filter, updateFilter] = useState('');

  const [LoadingMask, toggleLoadingMask, loadingStatus] = useLoadingPage();

  const { currentUser } = useContext(AuthContext);

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
    keyword,
    maxPrice,
    minPrice,
  ]);

  useEffect(() => {
    if (taskList.length && loadingStatus === true) {
      toggleLoadingMask(false);
    }
  }, [taskList.length, loadingStatus]);

  return (
    <LoadTaskProvider loadTaskList={loadTaskList} >
      <div className={styles.browse} >
        <TaskMenu onFilterChange={updateFilter} />
        <LoadingMask>
          <TaskList taskList={taskList} />
        </LoadingMask>
      </div>
    </LoadTaskProvider>
  );
}

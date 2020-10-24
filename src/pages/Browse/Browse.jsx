import React, { useEffect, useState } from 'react';

import styles from './Browse.module.scss';

import TaskList from './TaskList';
import getTaskList from '../../apis/Task/getTaskList';
import TaskMenu from './TaskMenu';
import useLoadingPage from '../../components/LoadingPage/useLoadingPage';
import { LoadTaskProvider } from './TaskDetail/LoadTaskContext';
import EmptyTask from './EmptyTask';

export default function Browse() {
  const [taskList, setTaskList] = useState([]);

  const [filter, updateFilter] = useState('');

  const [LoadingMask, toggleLoadingMask, loadingStatus] = useLoadingPage();

  const loadTaskList = async () => {
    const newTaskList = await getTaskList(filter) || [];
    setTaskList(newTaskList);

    if (loadingStatus) toggleLoadingMask();
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

  return (
    <LoadTaskProvider loadTaskList={loadTaskList} >
      <div className={styles.browse} >
        <TaskMenu onFilterChange={updateFilter} />
        <LoadingMask>
          {taskList.length
            ? <TaskList taskList={taskList} />
            : <EmptyTask />
          }
        </LoadingMask>
      </div>
    </LoadTaskProvider>
  );
}

import React, { useEffect, useState } from 'react';

import styles from './Browse.module.scss';

import TaskDisplay from './TaskDisplay';
import getTaskList from '../../apis/Task/getTaskList';
import TaskMenu from './TaskMenu';
import useLoadingPage from '../../components/LoadingPage/useLoadingPage';
import { LoadTaskProvider } from './TaskDetail/LoadTaskContext';
import EmptyTask from './EmptyTask';

const DEFAULT_PAGE_SIZE = 5;

const initConfig = {
  keyword: '',
  maxPrice: '',
  minPrice: '',
  page: 1,
  pageSize: DEFAULT_PAGE_SIZE,
};

export default function Browse() {
  const [taskList, setTaskList] = useState([]);

  const [config, updateConfig] = useState(initConfig);

  const [LoadingMask, toggleLoadingMask] = useLoadingPage();

  const {
    keyword,
    maxPrice,
    minPrice,
    page,
  } = config;

  const loadTaskList = async () => {
    toggleLoadingMask(true);

    const newTaskList = await getTaskList(config);

    if (newTaskList.length) {
      setTaskList((prevList) => prevList.concat(newTaskList));
    }

    toggleLoadingMask(false);
  };

  useEffect(() => {
    loadTaskList();
  }, [
    keyword,
    maxPrice,
    minPrice,
    page,
  ]);

  const nextPage = () => {
    updateConfig((prevState) => ({
      ...prevState,
      page: prevState.page + 1,
    }));
  };

  return (
    <LoadTaskProvider loadTaskList={loadTaskList} >
      <div className={styles.browse} >
        <TaskMenu onFilterChange={updateConfig} />
        <LoadingMask>
          {taskList.length
            ? (
              <TaskDisplay
                taskList={taskList}
                nextPage={nextPage}
              />
            )
            : <EmptyTask />
          }
        </LoadingMask>
      </div>
    </LoadTaskProvider>
  );
}

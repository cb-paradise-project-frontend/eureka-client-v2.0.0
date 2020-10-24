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
  const [page, setPage] = useState(1);

  const [LoadingMask, toggleLoadingMask] = useLoadingPage();

  const {
    keyword,
    maxPrice,
    minPrice,
  } = config;

  const loadTaskList = async () => {
    toggleLoadingMask(true);

    const newTaskList = await getTaskList({
      ...config,
      pageSize: taskList.length || DEFAULT_PAGE_SIZE,
    });

    if (newTaskList.length) {
      setTaskList(newTaskList);
    }

    toggleLoadingMask(false);
  };

  useEffect(() => {
    loadTaskList();
  }, [
    keyword,
    maxPrice,
    minPrice,
  ]);

  const extendTaskList = async () => {
    toggleLoadingMask(true);

    const newTaskList = await getTaskList({
      ...config,
      page,
    });

    if (newTaskList.length) {
      setTaskList((prevList) => prevList.concat(newTaskList));
    }

    toggleLoadingMask(false);
  };

  useEffect(() => {
    if (page > 1) extendTaskList();
  }, [page]);

  const nextPage = () => {
    setPage((prevState) => prevState + 1);
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
            ) : <EmptyTask />
          }
        </LoadingMask>
      </div>
    </LoadTaskProvider>
  );
}

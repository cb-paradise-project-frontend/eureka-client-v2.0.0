import React, { useEffect, useState } from 'react';

import styles from './Browse.module.scss';

import TaskDisplay from './TaskDisplay';
import getTaskList from '../../apis/Task/getTaskList';
import TaskMenu from './TaskMenu';
import useLoadingPage from '../../hooks/useLoadingPage';
import { LoadTaskProvider } from './TaskDetail/LoadTaskContext';
import EmptyTask from './EmptyTask';
import ScrollManager from '../../components/ScrollManager';

const initConfig = {
  keyword: '',
  maxPrice: '',
  minPrice: '',
  page: 1,
  pageSize: 10,
  category: '',
};

export default function Browse() {
  const [taskList, setTaskList] = useState([]);

  const [config, updateConfig] = useState(initConfig);
  const [page, setPage] = useState(1);

  const [LoadingMask, toggleLoadingMask] = useLoadingPage();

  const maskWhenFetch = async (fetchFunction) => {
    toggleLoadingMask(true);
    await fetchFunction();
    toggleLoadingMask(false);
  };

  const {
    keyword,
    maxPrice,
    minPrice,
    category,
  } = config;

  const loadTaskList = async () => {
    const newTaskList = await getTaskList(config);

    setTaskList(newTaskList);
    setPage(1);
  };

  useEffect(() => {
    maskWhenFetch(loadTaskList);
  }, [
    keyword,
    maxPrice,
    minPrice,
    category,
  ]);

  const extendTaskList = async () => {
    const newTaskList = await getTaskList({
      ...config,
      page,
    });

    if (newTaskList.length) {
      setTaskList((prevList) => prevList.concat(newTaskList));
    }
  };

  useEffect(() => {
    if (page > 1) maskWhenFetch(extendTaskList);
  }, [page]);

  const nextPage = () => {
    setPage((prevState) => prevState + 1);
  };

  const reload = async () => {
    const newTaskList = await getTaskList({
      ...config,
      pageSize: taskList.length,
    });

    if (newTaskList.length) {
      setTaskList(newTaskList);
    }
  };

  return (
    <LoadTaskProvider reload={() => maskWhenFetch(reload)} >
      <div className={styles.browse} >
        <TaskMenu onFilterChange={updateConfig} />
        <ScrollManager>
          {({ lastScroll, saveScroll }) => (
            <LoadingMask>
              {taskList.length
                ? (
                  <TaskDisplay
                    taskList={taskList}
                    nextPage={nextPage}
                    lastScroll={lastScroll}
                    saveScroll={saveScroll}
                  />
                ) : <EmptyTask />
              }
            </LoadingMask>
          )}
        </ScrollManager>
      </div>
    </LoadTaskProvider>
  );
}

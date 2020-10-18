import React, { useContext } from 'react';

import styles from './Header.module.scss';

import TaskInfo from './TaskInfo';
import StatusList from './StatusList';
import { TaskContext } from '../TaskContext';

function Header() {
  const { title } = useContext(TaskContext);

  return (
    <div className={styles.header} >
      <div className={styles.detail_panel} >
        <div className={styles.status_bar} >
          <StatusList />
        </div>
        <div className={styles.title} >
          <h1>{title}</h1>
        </div>
        <TaskInfo />
      </div>
    </div>
  );
}

export default Header;

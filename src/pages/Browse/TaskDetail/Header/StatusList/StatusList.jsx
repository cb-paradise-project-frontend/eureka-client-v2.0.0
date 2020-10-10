import React, { useContext } from 'react';
import classNames from 'classnames/bind';

import styles from './StatusList.module.scss';

import * as STATUS from '../../../../../components/Status'; 
import { TaskContext } from '../../../TaskContext';

export default function StatusList() {
  const { status } = useContext(TaskContext);

  const cx = classNames.bind(styles);

  const statusNameList = Object.values(STATUS);
  const statusList = statusNameList.map((statusName) => (
    <div
      className = {cx(
        {
          status: true,
          active: status === statusName,
        },
        statusName.toLowerCase(),
      )}
      key={statusName}
    >
      {statusName}
    </div>
  ));

  return (
    <div className={styles.status_list} >
      {statusList}
    </div>
  );
}

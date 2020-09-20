import React from 'react';
import classNames from 'classnames/bind';

import styles from './StatusList.module.scss';

import * as STATUS from '../../../../../components/Status'; 

function StatusList({ status }) {
  const cx = classNames.bind(styles);

  const statusNameList = Object.values(STATUS);
  const statusList = statusNameList.map((statusName) => (
    <div 
      className = {cx(
        { 
          status: true,
          active: status === statusName,
        },
        statusName.toLowerCase()
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

export default StatusList;
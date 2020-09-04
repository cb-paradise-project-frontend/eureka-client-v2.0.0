import React from 'react';
import classNames from 'classnames/bind';

import styles from './StatusList.module.scss';

function StatusList({ status }) {
  const cx = classNames.bind(styles);

  const statusNameList = ['open', 'assigned', 'completed', 'expired'];
  const statusList = statusNameList.map((statusName) => (
    <div 
      className = {cx(
        {
          status: true,
          active: status.toUpperCase() === statusName.toUpperCase(),
        },
        statusName
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
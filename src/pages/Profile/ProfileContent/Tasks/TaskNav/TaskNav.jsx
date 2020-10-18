import React from 'react';
import classnames from 'classnames/bind';

import styles from './TaskNav.module.scss';

const cx = classnames.bind(styles);

const TaskNav = ({
  children,
  onClick,
  taskType,
}) => {
  const className = cx({
    nav: true,
    selected: taskType === children,
  });

  return (
  <button
    className={className}
    onClick={onClick}
  >
    {children}
  </button>
  );
};

export default TaskNav;

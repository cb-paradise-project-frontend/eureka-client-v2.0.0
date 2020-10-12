import React from 'react';

import styles from './TaskMenu.module.scss';

import Input from '../../../components/Input';

export default function TaskMenu() {
  return (
    <div className={styles.task_menu} >
      <div className={styles.search} >
        <Input
          placeholder="Search for a task"
        />
      </div>
    </div>
  );
}

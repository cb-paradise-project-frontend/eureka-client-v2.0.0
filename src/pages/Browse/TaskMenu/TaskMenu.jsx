import React, { useState } from 'react';

import styles from './TaskMenu.module.scss';

import Input from '../../../components/Input';

export default function TaskMenu() {
  const [keyword, setKeyword] = useState();

  return (
    <div className={styles.task_menu} >
      <div className={styles.search} >
        <Input.Search
          placeholder="Search for a task"
          value={keyword}
          handleChange={setKeyword}
        />
      </div>
    </div>
  );
}

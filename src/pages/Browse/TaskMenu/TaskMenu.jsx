import React, { useState } from 'react';

import styles from './TaskMenu.module.scss';

import Input from '../../../components/Input';
import PriceFilter from './PriceFilter';

export default function TaskMenu({ onKeywordChange }) {
  const [keyword, inputKeyword] = useState('');

  const handleSubmit = () => {
    onKeywordChange(keyword);
  };

  return (
    <div className={styles.task_menu_wrapper} >
      <div className={styles.task_menu} >
        <PriceFilter />
        <div className={styles.search} >
          <Input.Search
            placeholder="Search for a task"
            value={keyword}
            handleChange={inputKeyword}
            onSubmit={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
}

import React, { useState } from 'react';

import styles from './TaskMenu.module.scss';

import Input from '../../../components/Input';
import PriceFilter from './PriceFilter';
import CategoryFilter from './CategoryFilter';

export default function TaskMenu({ onFilterChange }) {
  const [keyword, inputKeyword] = useState('');

  const handleKeywordUpdate = () => {
    onFilterChange((prevFilter) => (
      {
        ...prevFilter,
        keyword,
      }
    ));
  };

  const handlePriceRangeUpdate = (minPrice, maxPrice) => {
    onFilterChange((prevFilter) => (
      {
        ...prevFilter,
        minPrice,
        maxPrice,
      }
    ));
  };

  const handleCategoryUpdate = (category) => {
    onFilterChange((prevFilter) => (
      {
        ...prevFilter,
        category,
      }
    ));
  };

  return (
    <div className={styles.task_menu_wrapper} >
      <div className={styles.task_menu} >
        <PriceFilter onSubmit={handlePriceRangeUpdate} />
        <CategoryFilter onSubmit={handleCategoryUpdate} />
        <div className={styles.search} >
          <Input.Search
            placeholder="Search for a task"
            value={keyword}
            handleChange={inputKeyword}
            onSubmit={handleKeywordUpdate}
          />
        </div>
      </div>
    </div>
  );
}

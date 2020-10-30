import React from 'react';

import styles from './TaskMenu.module.scss';

import PriceFilter from './PriceFilter';
import CategoryFilter from './CategoryFilter';
import KeywordInput from './KeywordInput';

export default function TaskMenu({ onFilterChange }) {
  const handlePriceRangeUpdate = (minPrice, maxPrice) => {
    onFilterChange((prevFilter) => (
      {
        ...prevFilter,
        minPrice,
        maxPrice,
      }
    ));
  };

  const handleFilterChange = (key) => (input) => {
    onFilterChange((prevFilter) => (
      {
        ...prevFilter,
        [key]: input,
      }
    ));
  };

  return (
    <div className={styles.task_menu_wrapper} >
      <div className={styles.task_menu} >
        <PriceFilter onSubmit={handlePriceRangeUpdate} />
        <CategoryFilter onSubmit={handleFilterChange('category')} />
        <KeywordInput onSubmit={handleFilterChange('keyword')} />
      </div>
    </div>
  );
}

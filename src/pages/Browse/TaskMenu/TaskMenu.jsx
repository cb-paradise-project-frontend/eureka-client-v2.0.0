import React, { useState } from 'react';

import styles from './TaskMenu.module.scss';

import PriceFilter from './PriceFilter';
import CategoryFilter from './CategoryFilter';
import KeywordInput from './KeywordInput';

export default function TaskMenu({ onFilterChange }) {
  const [activeDropDown, setActive] = useState('');

  const filterToggler = (key) => () => {
    setActive((prevState) => (
      (prevState === key) ? '' : key));
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
        <PriceFilter
          active={activeDropDown === 'price'}
          onSubmit={handlePriceRangeUpdate}
          toggler={filterToggler('price')}
        />
        <CategoryFilter
          active={activeDropDown === 'category'}
          onSubmit={handleFilterChange('category')}
          toggler={filterToggler('category')}
        />
        <KeywordInput onSubmit={handleFilterChange('keyword')} />
      </div>
    </div>
  );
}

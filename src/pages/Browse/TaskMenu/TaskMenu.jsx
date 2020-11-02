import React, { useState } from 'react';
import className from 'classnames/bind';

import styles from './TaskMenu.module.scss';

import PriceFilter from './PriceFilter';
import CategoryFilter from './CategoryFilter';
import KeywordInput from './KeywordInput';
import Button from '../../../components/Button';

const cx = className.bind(styles);

export default function TaskMenu({ onFilterChange }) {
  const [activeDropDown, setActive] = useState('');

  const [mobileActive, toggleActive] = useState(false);

  const handleToggle = () => {
    toggleActive((prevState) => !prevState);
  };

  const ToggleButton = () => (
    <div className={styles.toggle_button} >
      <Button.SearchIcon
        onClick={handleToggle}
      />
    </div>
  );

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
        <div className={cx({
          left: true,
          active: !mobileActive,
        })} >
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
        </div>
        <div className={styles.right} >
          <ToggleButton />
          <div className={cx({
            input_wrapper: true,
            active: mobileActive,
          })} >
            <KeywordInput onSubmit={handleFilterChange('keyword')} />
          </div>
        </div>
      </div>
    </div>
  );
}

import React from 'react';

import styles from './CategoryFilter.module.scss';

import useMenuDropDown from '../useMenuDropDown';

const categoryList = {
  PICKUP: 'Pick up',
  CLEAN: 'Clean',
  REMOVAL: 'Removal',
};

export default function CategoryFilter({ onSubmit }) {
  const [MenuDropDown, toggleDropDown] = useMenuDropDown('Category');

  return (
    <MenuDropDown>
      <select
        required
        className={styles.select}
        onChange={(e) => onSubmit(e.target.value)}
      >
        <option value="" disabled>
          Select the task category
        </option>
        {Object.keys(categoryList).map((key) => (
            <option key={key} value={key} >
              {categoryList[key]}
            </option>
        ))}
      </select>
    </MenuDropDown>
  );
}

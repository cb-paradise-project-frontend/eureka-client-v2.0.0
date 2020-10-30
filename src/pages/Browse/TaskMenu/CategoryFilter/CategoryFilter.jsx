import React, { useState } from 'react';

import styles from './CategoryFilter.module.scss';

import useMenuDropDown from '../useMenuDropDown';

const categoryList = {
  pickUp: {
    value: 'PICKUP',
    label: 'Pick up',
  },
  clean: {
    value: 'CLEAN',
    label: 'Clean',
  },
  removal: {
    value: 'REMOVAL',
    label: 'Removal',
  },
  any: {
    value: '',
    label: 'Any',
  },
};

export default function CategoryFilter({ onSubmit }) {
  const [target, setTarget] = useState('any');

  const buttonLabel = `Category - ${categoryList[target].label}`;

  const [MenuDropDown, toggleDropDown] = useMenuDropDown(buttonLabel);

  const handleChange = (e) => {
    e.preventDefault();
    const { value: key } = e.target;

    setTarget(key);
    onSubmit(categoryList[key].value);

    toggleDropDown();
  };

  return (
    <MenuDropDown>
      <div className={styles.container} >
        <div className={styles.title} >
          Select a category
        </div>
        <select
          className={styles.select}
          value={target}
          onChange={handleChange}
          required
        >
          {Object.keys(categoryList).map((key) => (
            <option
              key={key}
              value={key}
            >
              {categoryList[key].label}
            </option>
          ))}
        </select>
      </div>
    </MenuDropDown>
  );
}

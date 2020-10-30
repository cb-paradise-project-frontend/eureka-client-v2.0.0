import React, { useState } from 'react';

import styles from './CategoryFilter.module.scss';

import MenuDropDown from '../MenuDropDown';
import CATEGORY from './categoryList';

export default function CategoryFilter({
  onSubmit,
  active,
  toggler,
}) {
  const [target, setTarget] = useState('any');

  const buttonLabel = `Category - ${CATEGORY[target].label}`;

  const handleChange = (e) => {
    e.preventDefault();
    const { value: key } = e.target;

    setTarget(key);
    onSubmit(CATEGORY[key].value);

    toggler();
  };

  return (
    <MenuDropDown
      buttonLabel={buttonLabel}
      active={active}
      toggler={toggler}
    >
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
          {Object.keys(CATEGORY).map((key) => (
            <option
              key={key}
              value={key}
            >
              {CATEGORY[key].label}
            </option>
          ))}
        </select>
      </div>
    </MenuDropDown>
  );
}

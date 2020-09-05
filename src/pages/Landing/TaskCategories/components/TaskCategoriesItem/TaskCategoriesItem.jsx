import React from 'react';

import styles from './TaskCategoriesItem.module.scss';

import houseIcon from '../../../../../assets/house.svg';

function TaskCategoriesItem({
  type,
  children
}) {
	return (
    <div className={styles.taskCategoriesItem}>
      <button className={styles.taskCategoriesItem__button}>
        <div>
          <img src={houseIcon} alt={type}/>
        </div>
        <p>{children}</p>
      </button>
    </div>
	);
}


export default TaskCategoriesItem;
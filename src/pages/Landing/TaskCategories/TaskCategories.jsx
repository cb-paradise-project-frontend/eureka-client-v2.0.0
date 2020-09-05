import React from 'react';

import styles from './TaskCategories.module.scss';

import TaskCategoriesItem from './components/TaskCategoriesItem';

function TaskCategories() {
	return (
    <div className={styles.taskCategories__container}>
      <h3>What do you need done?</h3>
      <div>
        <TaskCategoriesItem type="house">House</TaskCategoriesItem>
        <TaskCategoriesItem type="house">Used</TaskCategoriesItem>
        <TaskCategoriesItem type="house">Clean</TaskCategoriesItem>
        <TaskCategoriesItem type="house">House</TaskCategoriesItem>
        <TaskCategoriesItem type="house">Used</TaskCategoriesItem>
        <TaskCategoriesItem type="house">Clean</TaskCategoriesItem>
      </div>
    </div>
	);
}

export default TaskCategories;
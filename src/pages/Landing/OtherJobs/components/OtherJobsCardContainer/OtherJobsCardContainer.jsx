import React from 'react';

import styles from './OtherJobsCardContainer.module.scss';

import OtherJobsCard from '../OtherJobsCard';


function OtherJobsCardContainer({
  taskList,
  currentCategory,
  tabDescription,
}) {
  
    if(!taskList) {
      return null;
    }
    let currentTask = taskList[currentCategory];
    if(currentTask.length > 6) currentTask = currentTask.slice(0, 6);

    return (
      <div className={styles.OtherJobs__cards}>
        <div className={styles.OtherJobs__description}>
          <h4>{tabDescription}</h4>
        </div>

        <div className={styles.OtherJobs__cardGrid}>
          {
            currentTask.map((task) =>
              { 
                const due_Date = new Date(task.dueDate)
                return (
                  <OtherJobsCard
                    key = {task.id}
                    title = {task.title}
                    description = {task.description}
                    price = {task.budget}
                    rate = {due_Date.toDateString()}
                  />)
            }
            )
          }
        </div>
      </div>
    );
  }


export default OtherJobsCardContainer;
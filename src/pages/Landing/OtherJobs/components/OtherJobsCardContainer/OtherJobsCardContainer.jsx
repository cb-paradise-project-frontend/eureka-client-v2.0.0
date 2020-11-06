import React from 'react';

import styles from './OtherJobsCardContainer.module.scss';

import OtherJobsCard from '../OtherJobsCard';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


function OtherJobsCardContainer({
  taskList,
  currentCategory,
  tabDescription,
}) {
  const history = useHistory();

    if(!taskList) {
      return null;
    }
    let currentTask = taskList[currentCategory];
    if(!currentTask) {
      currentTask = [ {key: 0, title: 'default', description: 'default', budget: '0', dueDate: '0'} ];
    }
    else if(currentTask.length > 6) currentTask = currentTask.slice(0, 6);

    const jumpToBrowser = (taskID) => () => {
      history.push(`/tasks/${taskID}`)
    }

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
                    onClick={jumpToBrowser(task.id)}
                    avatarID={task.postedBy.avatarId}
                  />)
              }
            )
          }
        </div>
      </div>
    );
  }
export default OtherJobsCardContainer;
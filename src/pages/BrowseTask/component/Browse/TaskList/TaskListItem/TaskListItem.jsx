import React from 'react';
import classNames from 'classnames/bind';
import { withRouter } from 'react-router-dom';

import styles from './TaskListItem.module.scss';

function TaskListItem({ task, history, match }) {
  const {
    title,
    status,
    budget,
    poster,
    location,
    due,
    id
  } = task;

  function handleClick() {
    history.push(`${match.url}/${id}`);
  }

  const cx = classNames.bind(styles);

  return(
    <div 
      className = {cx(
        'task_list_item',
        status, 
      )}
      onClick = {handleClick}
    >
      <div className = {styles.header}>
        <div className = {styles.title}>
          {title}
        </div>
        <div className = {styles.budget}>
          ${budget}
        </div>
      </div>
      <div className = {styles.content}>
        <div className = {styles.avatar}>
          <img src = {poster.avatar} alt = 'avatar'/>
        </div>
        <div className = {styles.location}>
          {location}
        </div>
        <div className = {styles.due}>
          {due}
        </div>
      </div>
      <div className = {styles.footer}>
        <div className = {styles.status}>
          {status}
        </div>
      </div>
    </div>
  );
}

export default withRouter(TaskListItem);
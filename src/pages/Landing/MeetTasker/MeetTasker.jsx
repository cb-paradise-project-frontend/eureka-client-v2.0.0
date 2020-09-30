import React from "react";

import TaskerSection from "./TaskerSection";

import TaskerDisplay from "./TaskerDisplay";

import styles from "./MeetTasker.module.scss";

function MeetTasker(props){
  const { data } = props;
  return (
    <div className={styles.tasker}>
        <TaskerDisplay />
        <h2>Samantha Emily Brendan</h2>
        {data.map((singleData, index) => (
          <TaskerSection key={index} data={singleData} />
        ))}
        <button className={styles.taskerButton}>Become a Tasker</button>
      </div>
  );

}

export default MeetTasker;

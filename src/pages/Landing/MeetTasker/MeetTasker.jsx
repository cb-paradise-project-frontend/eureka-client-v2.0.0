import React from "react";

import styles from "./MeetTasker.module.scss";

import TaskerSection from "./TaskerSection";
import TaskerDisplay from "./TaskerDisplay";

function MeetTasker(props){
  const { data } = props;
  return (
    <div className={styles.tasker}>
        <TaskerDisplay />
        {data.map((singleData, index) => (
          <TaskerSection key={index} data={singleData} />
        ))}
        <button className={styles.taskerButton}>Become a Tasker</button>
      </div>
  );

}

export default MeetTasker;

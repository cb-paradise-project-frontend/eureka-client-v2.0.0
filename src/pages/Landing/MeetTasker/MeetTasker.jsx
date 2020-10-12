import React from "react";

import styles from "./MeetTasker.module.scss";

import TaskerSection from "./TaskerSection";
import TaskerDisplay from "./TaskerDisplay";
import MeetTaskerNav from "./MeetTaskerNav/MeetTaskerNav";

function MeetTasker(props){
  const { data } = props;
  return (
    <div className={styles.tasker}>
        <TaskerDisplay />
        <MeetTaskerNav />
        <button className={styles.taskerButton}>Become a Tasker</button>
      </div>
  );

}

export default MeetTasker;

import React from "react";

import styles from "./MeetTasker.module.scss";

import TaskerDisplay from "./TaskerDisplay";
import MeetTaskerNav from "./MeetTaskerNav/MeetTaskerNav";

function MeetTasker() {
  return (
    <div className={styles.tasker}>
      <div className={styles.wrapper}>
        <TaskerDisplay />
        <MeetTaskerNav />
        <button className={styles.taskerButton}>Become a Tasker</button>
      </div>
    </div>
  );
}

export default MeetTasker;

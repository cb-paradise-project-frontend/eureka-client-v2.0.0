import React from "react";

import styles from "./MeetTasker.module.scss";

import TaskerDisplay from "./TaskerDisplay";
import MeetTaskerNav from "./MeetTaskerNav/MeetTaskerNav";

function MeetTasker() {
  return (
    <div className={styles.otherJobs__container}>
      <div className={styles.bg__wrapper}>
        <div className={styles.content__wrapper}>
            <div className={styles.tasker__container}>
              <TaskerDisplay />
              <MeetTaskerNav />
              <button className={styles.taskerButton}>Become a Tasker</button>
            </div>
          </div>
        </div>
      </div>
  );
}

export default MeetTasker;

import React from "react";

import styles from "../../MeetTasker/MeetTasker.module.scss";


function TaskerDisplay () {
    return (
        <React.Fragment>
        <div className={styles.title}> Meet some Taskers!</div>
        <div className={styles.content}>
          Discover the story behind the people that are making the Airtasker
          community great, how and why they do what they do.
        </div>
        </React.Fragment>
    );
}
 
export default TaskerDisplay;
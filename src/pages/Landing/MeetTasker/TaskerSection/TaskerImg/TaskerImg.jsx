import React from "react";

import styles from "./TaskerImg.module.scss";

import Samantha from "../../../../../assets/tasker-samantha.png";


function TaskerImg () {
    return (
        <React.Fragment>
        <img src={Samantha} alt="taskerPhoto" className={styles.taskerPhoto}/>
        </React.Fragment>
    );
}
 
export default TaskerImg;
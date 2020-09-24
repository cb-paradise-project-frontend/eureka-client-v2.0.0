import React from "react";

import styles from "./TaskerImg.module.scss";

function TaskerImg (props) {
    console.log(props);
    return (
        <React.Fragment>
        <img src={props.data.taskerImg} alt="taskerPhoto" className={styles.taskerPhoto}/>
        </React.Fragment>
    );
}

export default TaskerImg;
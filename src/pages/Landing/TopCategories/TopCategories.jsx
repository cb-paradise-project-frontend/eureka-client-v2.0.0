import React from 'react';
import { TopicBlock } from './TopBlock/TopicBlock';
import styles from "./TopCategories.module.scss";

function TopCategories (props) {
    return(
        <div className={styles.categories}>
        <div className={styles.title}>Some of our top categories</div>
       <TopicBlock />
    </div>
    )
}
export default TopCategories;
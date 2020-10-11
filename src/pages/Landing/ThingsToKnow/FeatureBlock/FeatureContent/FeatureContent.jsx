import React from 'react';

import styles from "./FeatureContent.module.scss";

function FeatureContent(props){
    return(
        <div className={styles.feature_content}>
        <div className={styles.subhead}>{props.data.subhead}</div>
        <div className={styles.describe}>{props.data.describe}</div>
        <a
          href="https://support.airtasker.com/hc/en-au/categories/200049939-Payments"
          className={styles.read_more}
        >
          Read more
        </a>
      </div>
    )
}

export default FeatureContent;
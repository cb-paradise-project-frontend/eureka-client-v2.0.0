import React from 'react';

import styles from "./FeatureImg.module.scss";

function FeatureImg(props) {
    return (
        <div className={styles.FeatureImg}>
        <img src={props.data.featureImg} alt="test" />
        </div>
    )
}


export default FeatureImg;
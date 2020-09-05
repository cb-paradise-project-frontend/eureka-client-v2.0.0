import React from 'react';

import styles from "../../FeatureBlock/FeatureBlock.module.scss";

import SecurePayment from "../../../../../assets/secure-payments.png";


function FeatureImg() {
    return (
        <div className={styles.FeatureImg}>
        <img src={SecurePayment} alt="test"></img>
        </div>
    )
}


export default FeatureImg;
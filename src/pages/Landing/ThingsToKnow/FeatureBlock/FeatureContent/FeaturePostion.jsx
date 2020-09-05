import React from 'react';

import FeatureImg from './FeatureImg';
import FeatureContent from './FeatureContent';

import styles from "../../FeatureBlock/FeatureBlock.module.scss";




function FeaturePostion(props) {
    const {ImgLeft, } = props;

    return (
        <React.Fragment>
        {
            ImgLeft ? (
                <div className={styles.FeatureContainer}>
                <FeatureImg /><FeatureContent />
                </div>
            ) : (
                <div className={styles.FeatureContainer}>
                <FeatureContent /><FeatureImg />
                </div>
            )
        }    
        </React.Fragment> 
    )
}



export default FeaturePostion;
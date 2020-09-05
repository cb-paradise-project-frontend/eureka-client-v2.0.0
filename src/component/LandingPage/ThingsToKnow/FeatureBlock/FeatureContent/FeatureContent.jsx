import React from 'react';

import styles from "../../FeatureBlock/FeatureBlock.module.scss";

function FeatureContent(){
    return(
        <div className={styles.FeatureContent}>
        <div className={styles.subhead}>Secure Payments</div>
        <div className={styles.describe}>
          We hold task payments secure with our PCI-DSS compliant Airtasker Pay
          – so tasks can be completed knowing payment is there when you're done.
        </div>
        <a
          href="https://support.airtasker.com/hc/en-au/categories/200049939-Payments"
          className={styles.readMore}
        >
          Read more
        </a>
      </div>
    )
}

export default FeatureContent;
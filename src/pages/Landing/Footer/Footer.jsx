import React from "react";

import styles from "./Footer.module.scss";


function Footer() {
    return (
        <div className={styles.footer}>
           <div className={styles.logo}>AppName Pty. Ltd 2020-2020©, All rights reserved</div>
        </div>
        
    );
}

export default Footer;
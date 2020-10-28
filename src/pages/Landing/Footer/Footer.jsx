import React from "react";

import styles from "./Footer.module.scss";

function Footer() {
  return (
    <div className={styles.footer}>
     
      <div className={styles.footer__content}>
      <div className={styles.logo}>
        <i class="ri-facebook-fill"></i>
        <i class="ri-twitter-fill"></i>
        <i class="ri-linkedin-fill"></i>
        </div>
        <p>Eureka Pty. Ltd 2020-2021©, All rights reserved</p>
      </div>
        
      </div>

  );
}

export default Footer;

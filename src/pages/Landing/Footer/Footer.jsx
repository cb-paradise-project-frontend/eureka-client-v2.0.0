import React from "react";

import styles from "./Footer.module.scss";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.wrapper}>
      <div className={styles.footer__content}>
      <div className={styles.logo}>
        <i class="fab fa-facebook-f"></i>
        <i class="fab fa-twitter"></i>
        <i class="fab fa-linkedin-in"></i>
        </div>
        <p>Eureka Pty. Ltd 2020-2021©, All rights reserved</p>
      </div>
        
      </div>
    </div>
  );
}

export default Footer;

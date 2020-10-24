import React from "react";

import styles from "./Footer.module.scss";

function Footer() {
  return (
    <div className={styles.footer}>
     
      <div className={styles.footer__content}>
      <div className={styles.logo}>
        <i class="fab fa-facebook-f fa-lg"></i>
        <i class="fab fa-twitter fa-lg"></i>
        <i class="fab fa-linkedin-in fa-lg"></i>
        </div>
        <p>Eureka Pty. Ltd 2020-2021©, All rights reserved</p>
      </div>
        
      </div>

  );
}

export default Footer;

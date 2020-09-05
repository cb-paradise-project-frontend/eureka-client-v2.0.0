import React from "react";

import styles from "./FooterCategories.module.scss";

export const FooterCategories = (props) => (
  <div>
    <div className={styles.footerBlock}>
      <ul className={styles.footerList}>
        <li>
          <h4 className={styles.footerTitle}>Discover</h4>
        </li>
        <li className={styles.footerContent}>How it works</li>
        <li className={styles.footerContent}>How it works</li>
        <li className={styles.footerContent}>How it works</li>
        <li className={styles.footerContent}>How it works</li>
      </ul>
    </div>

    <div className={styles.footerBlock}>
      <ul className={styles.footerList}>
        <li>
          <h4 className={styles.footerTitle}>Company</h4>
        </li>
        <li className={styles.footerContent}>About us</li>
        <li className={styles.footerContent}>About us</li>
        <li className={styles.footerContent}>About us</li>
        <li className={styles.footerContent}>About us</li>
      </ul>
    </div>

    <div className={styles.footerBlock}>
      <ul className={styles.footerList}>
        <li>
          <h4 className={styles.footerTitle}>Existing Members</h4>
        </li>
        <li className={styles.footerContent}>Post a task</li>
        <li className={styles.footerContent}>Post a task</li>
        <li className={styles.footerContent}>Post a task</li>
        <li className={styles.footerContent}>Post a task</li>

      </ul>
    </div>

    <div className={styles.footerBlock}>
      <ul className={styles.footerList}>
        <li>
          <h4 className={styles.footerTitle}>Popular Categories</h4>
        </li>
        <li className={styles.footerContent}>Handyman service</li>
        <li className={styles.footerContent}>Handyman service</li>
        <li className={styles.footerContent}>Handyman service</li>
        <li className={styles.footerContent}>Handyman service</li>
      </ul>
    </div>

    <div className={styles.footerBlock}>
      <ul className={styles.footerList}>
        <li>
          <h4 className={styles.footerTitle}>Partners</h4>
        </li>
        <li className={styles.footerContent}>New Idea</li>
        <li className={styles.footerContent}>New Idea</li>
        <li className={styles.footerContent}>New Idea</li>
        <li className={styles.footerContent}>New Idea</li>
      </ul>
    </div>

  </div>
);

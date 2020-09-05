import React from "react";

import styles from "./TopicBlock.module.scss";

export const TopicBlock = (props) => (
  <div>
    <div className={styles.topicBlock}>
      <ul className={styles.topicList}>
        <li>
          <h4 className={styles.topicTitle}>SYDNEY</h4>
        </li>
        <li className={styles.topicContent}>People In Sydney</li>
        <li className={styles.topicContent}>People In Sydney</li>
        <li className={styles.topicContent}>People In Sydney</li>
        <li className={styles.topicContent}>People In Sydney</li>
        <li className={styles.topicContent}>People In Sydney</li>
      </ul>
    </div>

    <div className={styles.topicBlock}>
      <ul className={styles.topicList}>
        <li>
          <h4 className={styles.topicTitle}>MELBOURNE</h4>
        </li>
        <li className={styles.topicContent}>People In Melbourne</li>
        <li className={styles.topicContent}>People In Melbourne</li>
        <li className={styles.topicContent}>People In Melbourne</li>
        <li className={styles.topicContent}>People In Melbourne</li>
        <li className={styles.topicContent}>People In Melbourne</li>
      </ul>
    </div>

    <div className={styles.topicBlock}>
      <ul className={styles.topicList}>
        <li>
          <h4 className={styles.topicTitle}>BRISBANE</h4>
        </li>
        <li className={styles.topicContent}>People In Brisbane</li>
        <li className={styles.topicContent}>People In Brisbane</li>
        <li className={styles.topicContent}>People In Brisbane</li>
        <li className={styles.topicContent}>People In Brisbane</li>
        <li className={styles.topicContent}>People In Brisbane</li>
      </ul>
    </div>

    <div className={styles.topicBlock}>
      <ul className={styles.topicList}>
        <li>
          <h4 className={styles.topicTitle}>Adelaide</h4>
        </li>
        <li className={styles.topicContent}>People In Adelaide</li>
        <li className={styles.topicContent}>People In Adelaide</li>
        <li className={styles.topicContent}>People In Adelaide</li>
        <li className={styles.topicContent}>People In Adelaide</li>
        <li className={styles.topicContent}>People In Adelaide</li>
      </ul>
    </div>

    <div className={styles.topicBlock}>
      <ul className={styles.topicList}>
        <li>
          <h4 className={styles.topicTitle}>PERTH</h4>
        </li>
        <li className={styles.topicContent}>People In Perth</li>
        <li className={styles.topicContent}>People In Perth</li>
        <li className={styles.topicContent}>People In Perth</li>
        <li className={styles.topicContent}>People In Perth</li>
        <li className={styles.topicContent}>People In Perth</li>
      </ul>
    </div>
  </div>
);

import React from "react";

import styles from "./EverydayTasks.module.scss";

function EverydayTasks() {
  return (
    <React.Fragment>
      <div className={styles.everyday_tasks}>
        <div className={styles.wrapper}>
          <div className={styles.container}>
            <div className={styles.title}>Australia-wide everyday tasks</div>
            <div className={styles.content}>
            Airtasker is a Sydney-based Australian company which provides an online and mobile marketplace enabling users to outsource everyday tasks. Users describe the task and indicate a budget, community members then bid to complete the task.
            <br/>
            <br/>
            Airtasker partnered with Australian jobs listing website CareerOne in July 2013 which gave the platform further exposure to the casual jobs market. By late 2013 Airtasker had closed a second round of funding raising a further AUD $2 million, bringing total investment in the company to AUD $3.5 million and valuing it at $10 million.
            <br/>
            <br/>
            In 2017, Sydney company Freelancer alleged that Airtasker misappropriated confidential information in the usage of the term "Like a boss" in their advertising campaign. Airtasker lodged an opposition to Freelancer's "Like a boss" trademark, which was still in correspondence process with IP Australia in December 2018.
            <br/>
            <br/>
            In July 2018, some of Airtasker's Australian data may have been compromised in a Typeform data breach.
            <br/>
            <br/>
            In December 2018, the Australian Taxation Office audited Airtasker and requested the repayment of Research and Development rebates.
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default EverydayTasks;

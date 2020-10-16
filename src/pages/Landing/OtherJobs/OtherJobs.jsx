import React from 'react';

import styles from './OtherJobs.module.scss';

import OtherJobsNav from './components/OtherJobsNav'

function OtherJobs(props) {
  const {data} = props;
	return (
    <div className={styles.otherJobs__container}>
      <div className={styles.bg__wrapper}>
          <div className={styles.content__wrapper}>
            <div className={styles.otherJobsContent}>
              <h3>See what others are getting done</h3>
              <OtherJobsNav data={data}/>
            </div>
          </div>
      </div>
    </div>
	);
}

export default OtherJobs;
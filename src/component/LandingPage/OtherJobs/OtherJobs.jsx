import React from 'react';

import styles from './OtherJobs.module.scss';

import OtherJobsNav from './components/OtherJobsNav'

function OtherJobs() {
	return (
    <div className={styles.OtherJobs__container}>
      <h3>See what others are getting done</h3>
      <OtherJobsNav />
    </div>
	);
}

export default OtherJobs;
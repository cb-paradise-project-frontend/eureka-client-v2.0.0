import React from 'react';

import styles from './OtherJobs.module.scss';

import OtherJobsNav from './components/OtherJobsNav'

function OtherJobs(props) {
  const {data} = props
	return (
    <div className={styles.OtherJobs__container}>
      <h3>See what others are getting done</h3>
      <OtherJobsNav data={data}/>
    </div>
	);
}

export default OtherJobs;
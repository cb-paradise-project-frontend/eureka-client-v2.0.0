import React from 'react';

import styles from './Home.module.scss';

function Home() {
  return (
    <div className={styles.home__container}>
      <div>
        <h1>Connect with experts to get the job done on Airtasker</h1>
        <h4>It’s amazing what you can’t do yourself</h4>
      </div>
      <button>Get started now</button>
    </div>
  );
}

export default Home;
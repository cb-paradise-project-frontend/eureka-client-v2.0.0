import React from 'react';

import styles from './Home.module.scss';

import Button from '../../../components/Button';

function Home() {
  return (
    <div className={styles.home__container}>
      <div className={styles.bg__wrapper}>
        <div className={styles.content__wrapper}>
          <div className={styles.home__content}>
            <h2>Connect with experts to get the job done</h2>
            <h1>on Airtasker</h1>
            <p>It’s amazing what you can’t do yourself</p>
            <div>
              <Button color={'mint'}>
                Get started now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
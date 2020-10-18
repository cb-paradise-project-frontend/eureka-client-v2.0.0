import React from 'react';

import styles from './Account.module.scss';

import ProfileInputbox from '../../../../components/ProfileInputbox';

const Account = ({
  accountContent,
  onAccountChange,
}) => (
  <React.Fragment>
    <div className={styles.account_wrapper}>
      <div className={styles.input_wrapper}>
        <ProfileInputbox
          label="Firstname"
          accountContent={accountContent}
          onAccountChange={onAccountChange}
        />
      </div>
      <div className={styles.input_wrapper}>
        <ProfileInputbox
          label="Lastname"
          accountContent={accountContent}
          onAccountChange={onAccountChange}
        />
      </div>
      <div className={styles.input_wrapper}>
        <ProfileInputbox
          label="Email"
          accountContent={accountContent}
          onAccountChange={onAccountChange}
        />
      </div>
      <div className={styles.input_wrapper}>
        {/* 下面部分可以复用ziwei的components*/}
        <ProfileInputbox
          label="DOB"
          accountContent={accountContent}
          onAccountChange={onAccountChange}
        />
      </div>
      <div className={styles.input_wrapper}>
        <ProfileInputbox
          label="Mobile"
          accountContent={accountContent}
          onAccountChange={onAccountChange}
        />
      </div>
      <div className={styles.input_wrapper}>
        <ProfileInputbox
          label="Location"
          accountContent={accountContent}
          onAccountChange={onAccountChange}
        />
      </div>
    </div>
  </React.Fragment>
)

export default Account
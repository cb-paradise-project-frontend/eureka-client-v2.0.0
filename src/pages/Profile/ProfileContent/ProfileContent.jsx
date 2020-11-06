import React from 'react';

import styles from './ProfileContent.module.scss';

import Account from './Account';
import Payment from './Payment';
import Tasks from './Tasks';
import Password from './Password';
import { FetchContext } from '../../../apis/Fetch';

const ProfileContent = ({
  currentNav,
  accountContent,
  onProfileChange,
  paymentContent,
  onPaymentChange,
  onBirthdayChange,
  onSubmit,
  onNameChange,
  onNotification,
}) => {
  const contentDisplay = (pageIndex) => (
    {
      Account: <Account
        accountContent={accountContent}
        onAccountChange={onProfileChange}
        onBirthdayChange={onBirthdayChange}
        onSubmit={onSubmit}
        onNameChange={onNameChange}
      />,
      Payment: <Payment
        paymentContent={paymentContent}
        onPaymentChange={onPaymentChange}
        onSubmit={onSubmit}
      />,
      Tasks: <Tasks />,
      Password: <Password onNotification={onNotification} />,
    }[pageIndex]
  );

  return (
    <div className={styles.profile_content}>
      {contentDisplay(currentNav)}
    </div>
  );
};

export default ProfileContent;

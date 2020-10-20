import React from 'react';

import styles from './ProfileContent.module.scss';

import Account from './Account';
import Payment from './Payment';
import Tasks from './Tasks';
import Password from './Password';

const ProfileContent = ({
  currentNav,
  accountContent,
  onProfileChange,
  paymentContent,
  onBankChange,
  onBillChange,
  onBirthdayChange,
}) => {
  const contentDisplay = (pageIndex) => (
    {
      Account: <Account
        accountContent={accountContent}
        onAccountChange={onProfileChange}
        onBirthdayChange={onBirthdayChange}
      />,
      Payment: <Payment
        paymentContent={paymentContent}
        onBankChange={onBankChange}
        onBillChange={onBillChange}
      />,
      Tasks: <Tasks />,
      Password: <Password />,
    }[pageIndex]
  );

  return (
    <div className={styles.profile_content}>
      {contentDisplay(currentNav)}
    </div>
  );
};

export default ProfileContent;

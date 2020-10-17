import React from 'react';

import styles from './ProfileContent.module.scss';

import Account from './Account';
import Payment from './Payment';

const ProfileContent = ({
  currentNav,
  accountContent,
  onProfileChange,
  paymentContent,
  onBankChange,
  onBillChange,
}) => {
  const contentDisplay = (currentNav) => {
    return {
      Account: <Account 
        accountContent={accountContent}
        onAccountChange={onProfileChange}
      />,
      Payment: <Payment 
        paymentContent={paymentContent}
        onBankChange={onBankChange}
        onBillChange={onBillChange}
      />,
      Tasks: "tasks",
      Password: "password",
    }[currentNav]
  }
  return (
    <div className={styles.profile_content}>
      {contentDisplay(currentNav)}
    </div>
  )
};

export default ProfileContent;

import React from 'react';

import styles from './ProfileAvatar.module.scss';

import Avatar from '../../../../components/Avatar';
import Overlay from '../../../../components/Overlay';
import AvatarChoose from './AvatarChoose';

const ProfileAvatar = ({
  handleNavChange,
  userName,
  avatarID,
  isAvatarShow,
  onAvatarShowChange,
}) => (
  <div className={styles.avatar_wrapper}>
    <div className={styles.avatar} onClick={() => onAvatarShowChange(true)}>
      <Avatar avatarID={avatarID} />
    </div>
    <div
      className={styles.print_name}
      onClick={() => handleNavChange('Account')}
    >
      {userName}
    </div>
    {isAvatarShow
    && <Overlay>
      <AvatarChoose onClose={onAvatarShowChange} />
    </Overlay>}
  </div>
);

export default ProfileAvatar;

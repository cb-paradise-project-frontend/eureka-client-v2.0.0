import React from 'react';

import styles from './ProfileAvatar.module.scss';

import Avatar from '../../../../components/Avatar';
import Overlay from '../../../../components/Overlay';
import AvatarChoose from './AvatarChoose';
import { FetchContext } from '../../../../apis/Fetch';

const ProfileAvatar = ({
  handleNavChange,
  userName,
  avatarID,
  isAvatarShow,
  onAvatarShowChange,
  onNavAvatarChange,
  onAvatarChange,
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
      <FetchContext.Consumer>
        {({ setNotification }) => (
          <AvatarChoose
            onClose={onAvatarShowChange}
            avatarID={avatarID}
            onNavAvatarChange={onNavAvatarChange}
            onAvatarChange={onAvatarChange}
            onNotification={setNotification}
          />
        )}
      </FetchContext.Consumer>
    </Overlay>}
  </div>
);

export default ProfileAvatar;

import React from 'react';

import Profile from './Profile';
import { FetchContext } from '../../apis/Fetch'

const ProfileContainer = () => (
  <FetchContext.Consumer>
    {({ setNotification }) => (
      <Profile onNotification={setNotification} />
    )}
  </FetchContext.Consumer>
)

export default ProfileContainer;

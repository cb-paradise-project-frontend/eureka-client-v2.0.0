import React, { useContext, useEffect } from 'react';
import { AuthContext } from './../../auth/Auth';

const Profile = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div>
      <h1>You have logged in, your email is {currentUser.email}</h1>
    </div>
  );
}

export default Profile;

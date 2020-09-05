import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';

import { AuthContext } from './../../auth/Auth';
import { logOut } from './../../firebase';

const Profile = () => {
  const { currentUser } = useContext(AuthContext);
  const { displayName, email } = currentUser;

  const signOut = () => {
    logOut();
    if (!currentUser) {
      return (<Redirect to="/" />)
    }
  }

  return (
    <div>
      <h1>Profile Page</h1>
      <p>`Hello, ${displayName}, your email is ${email}`</p>
      <button onClick={signOut} >Log out</button>
    </div>
  );
}

export default Profile;

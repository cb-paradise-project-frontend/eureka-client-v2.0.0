import React, { Component } from 'react';

import { AuthContext } from '../../auth/Auth';
import Public from './Public';
import Private from './Private';

function Navigation() {
  return (
      <AuthContext.Consumer>
        {(currentUser) => (
          // console.log(123,currentUser)
          <React.Fragment>
            {
              !currentUser.currentUser ?
              <Public />
              : <Private />
            }
          </React.Fragment>
        )}
      </AuthContext.Consumer>
    );
}

export default Navigation;
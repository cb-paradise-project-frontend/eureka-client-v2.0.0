import React, { useContext, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from './../Auth';

const PrivateRoute = ({component, ...restProps}) => {
  const RouteComponent = component;
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    console.log('current user in private route', currentUser);
  }, [currentUser]);

  return (
    <Route
      {...restProps}
      render={(routeProps) => 
        !!currentUser ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to={'/login'} />
        )
      }
    />
  );
}

export default PrivateRoute;

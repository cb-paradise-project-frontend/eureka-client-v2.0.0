import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from './../Auth';

const PrivateRoute = ({component, ...restProps}) => {
  const RouteComponent = component;
  const { currentUser } = useContext(AuthContext);

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

import React, { useContext, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from './../Auth';
import LoginModal from './../../components/LoginModal';
import { useToggleContent } from './../../components/ToggleContent';

const PrivateRoute = ({component, ...restProps}) => {
  const RouteComponent = component;
  const { currentUser } = useContext(AuthContext);
  const [Content, toggler] = useToggleContent(true);

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
          <Content>
            <LoginModal pageToggler={toggler} />
          </Content>
        )
      }
    />
  );
}

export default PrivateRoute;

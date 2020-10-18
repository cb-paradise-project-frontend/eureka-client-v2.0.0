import React, { useContext } from 'react';
import { Route, useHistory } from 'react-router-dom';
import { AuthContext } from './../Auth';
import LoginModal from './../../components/LoginModal';
import { useToggleContent } from './../../components/ToggleContent';

const PrivateRoute = ({component, ...restProps}) => {
  const history = useHistory();
  const RouteComponent = component;
  const { currentUser } = useContext(AuthContext);
  const [Content, toggler] = useToggleContent(true);

  const handleToggle = () => {
    toggler();
    history.push('/');
  };

  return (
    <Route
      {...restProps}
      render={(routeProps) =>
        !!currentUser ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Content>
            <LoginModal pageToggler={handleToggle} />
          </Content>
        )
      }
    />
  );
}

export default PrivateRoute;

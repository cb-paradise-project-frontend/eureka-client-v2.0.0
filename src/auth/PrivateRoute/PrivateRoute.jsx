import React, { useContext, useEffect } from 'react';
import { Route, useHistory } from 'react-router-dom';
import { AuthContext } from './../Auth';
import LoginModal from './../../components/LoginModal';
import { useToggleContent } from './../../components/ToggleContent';
import { useLoadingPage } from '../../components/LoadingPage';

const PrivateRoute = ({component, ...restProps}) => {
  const history = useHistory();
  const RouteComponent = component;
  const { currentUser, userInitialized } = useContext(AuthContext);
  const [Content, toggler] = useToggleContent(true);
  const [LoadingMask, toggleLoadingMask] = useLoadingPage();

  useEffect(() => {
    if (userInitialized) {
      toggleLoadingMask();
    }
  }, [userInitialized]);

  const handleToggle = () => {
    toggler();
    history.push('/');
  };

  // 暂时保留此console.log方便观察，请勿删除，发布时再一起删除
  useEffect(() => {
    console.log('currentUser in private route', currentUser);
    console.log('userInitialized in private route', userInitialized);
  }, [userInitialized, currentUser]);

  return (
    !userInitialized ? (
      <LoadingMask />
    ) : (
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
    )
  );
}

export default PrivateRoute;

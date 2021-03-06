import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import 'remixicon/fonts/remixicon.css';

import { AuthProvider } from './auth/Auth';
import { NavProvider } from './components/Navigation/NavContext';
import PrivateRoute from './auth/PrivateRoute';
import Landing from './pages/Landing';
import ProfileContainer from './pages/Profile';
import NotFound from './pages/NotFound';
import Navigation from './components/Navigation';
import Browse from './pages/Browse';
import ResetPassword from './components/ResetPassword';
import { FetchProvider } from './apis/Fetch';

const App = () => (
  <Router>
    <FetchProvider>
      <AuthProvider>
        <NavProvider>
          <Navigation />
        </NavProvider>
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/tasks" >
            <Browse />
          </Route>
          <PrivateRoute path="/profile" component={ProfileContainer} />
          <Route path="/reset-password" component={ResetPassword} />
          <Route component={NotFound} />
        </Switch>
      </AuthProvider>
    </FetchProvider>
  </Router>
);

export default App;

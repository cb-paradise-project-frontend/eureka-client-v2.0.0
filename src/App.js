import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import 'remixicon/fonts/remixicon.css';

import { AuthProvider } from './auth/Auth';
import { NavProvider } from './pages/Navigation/NavContext';
import PrivateRoute from './auth/PrivateRoute';
import Landing from './pages/Landing';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import Navigation from './pages/Navigation';
import Browse from './pages/Browse';

const App = () => (
  <AuthProvider>
    <Router>
      <NavProvider>
        <Navigation />
      <Switch>
        <Route path="/tasks" component={Browse} />
        <PrivateRoute path="/profile" component={Profile} />
        <Route path="/" component={Landing} />
        <Route component={NotFound} />
      </Switch>
      </NavProvider>
    </Router>
  </AuthProvider>
);

export default App;

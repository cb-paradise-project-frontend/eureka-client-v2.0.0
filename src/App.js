import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import 'remixicon/fonts/remixicon.css';

import { AuthProvider } from './auth/Auth';
import { NavProvider } from './components/Navigation/NavContext';
import PrivateRoute from './auth/PrivateRoute';
import Landing from './pages/Landing';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import Navigation from './components/Navigation';
import Browse from './pages/Browse';

const App = () => (
  <AuthProvider>
    <Router>
      <NavProvider>
        <Navigation />
      </NavProvider>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/tasks" component={Browse} />
        <PrivateRoute path="/profile" exact component={Profile} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  </AuthProvider>
);

export default App;

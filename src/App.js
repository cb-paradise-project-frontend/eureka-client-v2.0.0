import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import 'remixicon/fonts/remixicon.css'

import { AuthProvider } from './auth/Auth';
import PrivateRoute from './auth/PrivateRoute';
import PostTask from './pages/PostTask';
import Landing from './pages/Landing';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import CreateProfile from './pages/CreateProfile';
import Navigation from './pages/Navigation/Navigation';
import Browse from './pages/Browse/Browse';

const App = () => {

  return (
    <AuthProvider>
      <Router>
        <Navigation />
        <Switch>
          <Route path="/tasks" component={Browse} />
          <PrivateRoute path="/profile" component={Profile} />
          <Route path="/" component={Landing} />
          <Route component={NotFound} />
        </Switch>
        <Route exact path="*/create" component={PostTask} />
        <Route exact path="*/make-bid" component={CreateProfile} />
      </Router>
    </AuthProvider>
  );
}

export default App;

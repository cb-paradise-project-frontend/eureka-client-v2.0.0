import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import 'remixicon/fonts/remixicon.css'

import { AuthProvider } from './auth/Auth';
import PrivateRoute from './auth/PrivateRoute';
import BrowseTask from './pages/BrowseTask';
import PostTask from './pages/PostTask';
import Landing from './pages/Landing';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import CreateProfile from './pages/BrowseTask/component/CreateProfile';

const App = () => {

  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="*/create" component={PostTask} />
          <Route path="/tasks" component={BrowseTask} />
          <PrivateRoute exact path="/profile" component={Profile} />
          <Route component={NotFound} />
        </Switch>
        <Route exact path="*/make-bid" component={CreateProfile} />
      </Router>
    </AuthProvider>
  );
}

export default App;

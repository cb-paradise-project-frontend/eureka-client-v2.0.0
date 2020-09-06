import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

import { AuthProvider } from './auth/Auth';
import PrivateRoute from './auth/PrivateRoute';
import Signup from './components/Signup';
import Login from './components/Login';
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
          <Route path="/tasks" component={BrowseTask} />
          <Route exact path="/create-profile" component={CreateProfile} />
          <Route exact path="/create" component={PostTask} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/profile" component={Profile} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;

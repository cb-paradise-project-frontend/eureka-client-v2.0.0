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
import { ModalControlProvider } from './ModalContext';

const App = () => {

  return (
    <AuthProvider>
<<<<<<< HEAD
<<<<<<< HEAD
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/tasks" component={BrowseTask} />
          <Route exact path="/create-profile" component={CreateProfile} />
          <Route exact path="/create" component={PostTask} />
          <PrivateRoute exact path="/profile" component={Profile} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
||||||| parent of ccd2037... 1. introduce 'react-modal' package;
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
=======
      <ModalControlProvider value={modalControl}>
||||||| parent of d4e2e68... 1. move all modal related code into "ModalContext";
      <ModalControlProvider value={modalControl}>
=======
      <ModalControlProvider>
>>>>>>> d4e2e68... 1. move all modal related code into "ModalContext";
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
      </ModalControlProvider>
<<<<<<< HEAD
      <Modal 
        isOpen={modalIsOpen}
        onRequestClose={toggleModal}
        style={customStyles}
      >
        {modalContent}
      </Modal>
>>>>>>> ccd2037... 1. introduce 'react-modal' package;
||||||| parent of d4e2e68... 1. move all modal related code into "ModalContext";
      <Modal 
        isOpen={modalIsOpen}
        onRequestClose={toggleModal}
        style={customStyles}
      >
        {modalContent}
      </Modal>
=======
>>>>>>> d4e2e68... 1. move all modal related code into "ModalContext";
    </AuthProvider>
  );
}

export default App;

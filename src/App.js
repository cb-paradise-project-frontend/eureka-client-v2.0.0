import React, { useState } from 'react';
import Modal from 'react-modal';
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

const customStyles = {
  content : {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    display: 'flex',
    borderRadius: '10px',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

Modal.setAppElement('#root');

const App = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalContent, setModal] = useState('');
  
  const toggleModal = () => {
    setIsOpen(!modalIsOpen);
  }

  const modalControl = { 
    toggleModal,
    setModal, 
  };

  return (
    <AuthProvider>
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
      <Modal 
        isOpen={modalIsOpen}
        onRequestClose={toggleModal}
        style={customStyles}
      >
        {modalContent}
      </Modal>
>>>>>>> ccd2037... 1. introduce 'react-modal' package;
    </AuthProvider>
  );
}

export default App;

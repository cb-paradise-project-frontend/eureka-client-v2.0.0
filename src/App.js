import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';

import BrowseTask from './component/BrowseTask';
import PostTask from './component/PostTask';
import LandingPage from './component/LandingPage';

function App() {
  return (
    <div className="App">
      <Router>
        <LandingPage />
        <BrowseTask />
        {/* <PostTask /> */}
      </Router>
    </div>
  );
}

export default App;

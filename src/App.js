import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';

import BrowseTask from './component/BrowseTask';
import PostTask from './component/PostTask';

function App() {
  return (
    <div className="App">
      <Router>
        <BrowseTask />
        <PostTask />
      </Router>
    </div>
  );
}

export default App;

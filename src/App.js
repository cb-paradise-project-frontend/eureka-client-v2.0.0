import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';

import BrowseTask from './component/BrowseTask';

function App() {
  return (
    <div className="App">
      <Router>
        <BrowseTask />
      </Router>
    </div>
  );
}

export default App;

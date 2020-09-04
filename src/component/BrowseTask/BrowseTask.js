import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './BrowseTask.css';

import Browse from './component/Browse';
import CreateProfile from './component/CreateProfile';

function BrowseTask() {
  return (
    <div className="browse_task">
      <Switch>
        <Route path='/profile' component={CreateProfile} />
        <Route path='/tasks' component={Browse} />
      </Switch>
    </div>
  );
}

export default BrowseTask;

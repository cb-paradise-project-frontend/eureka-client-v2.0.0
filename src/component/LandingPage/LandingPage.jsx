import React from 'react';

import Navigation from './Navigation';
import Home from './Home';
import TaskCategories from './TaskCategories';
import OtherJobs from './OtherJobs';

function LandingPage() {
  return (
    <>
      <Navigation />
      <Home />
      <TaskCategories />
      <OtherJobs />
    </>
  );
}

export default LandingPage;
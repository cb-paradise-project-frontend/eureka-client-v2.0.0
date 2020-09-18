import React from 'react';

import Landing from '../pages/Landing';

export default function landingModal(Component) {
  return () => (
    <>
      <Landing />
      <Component />
    </>
  );
}
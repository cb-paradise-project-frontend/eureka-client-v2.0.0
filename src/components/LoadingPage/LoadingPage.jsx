import React from 'react';

import Overlay from '../Overlay';
import Spinner from '../Spinner';

export default function LoadingPage() {
  return (
    <Overlay>
      <Spinner />
    </Overlay>
  );
}

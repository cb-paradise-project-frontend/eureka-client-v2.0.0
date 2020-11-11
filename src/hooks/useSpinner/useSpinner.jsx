import React from 'react';

import Spinner from '../../components/Spinner';
import useMask from '../useMask';

export default function useSpinner(initialState) {
  return useMask(Spinner, initialState);
}

import React from 'react';

import LoadingPage from '../../components/LoadingPage';
import useMask from '../useMask';

export default function useLoadingPage(initialState) {
  return useMask(LoadingPage, initialState);
}

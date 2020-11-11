import React, { useMemo, useState } from 'react';

import LoadingPage from '../../components/LoadingPage';

export default function useLoadingPage(initialState = true) {
  const [loading, toggleLoading] = useState(initialState);

  const toggler = (targetState) => (
    targetState 
      ? toggleLoading(targetState)
      : toggleLoading((prevState) => !prevState)
  );

  const Content = useMemo(() => ({ children }) => (
    <>
      {loading ? <LoadingPage /> : children}
    </>
  ), [loading]) ;

  return [Content, toggler, loading];
}

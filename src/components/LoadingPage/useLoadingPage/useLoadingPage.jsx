import React, { useState } from 'react';

import LoadingPage from '../LoadingPage';

export default function useLoadingPage(initialState = true) {
  const [loading, toggleLoading] = useState(initialState);

  const toggler = () => (
    toggleLoading((prevState) => !prevState)
  );

  const Content = ({ children }) => (
    <>
      {loading ? <LoadingPage /> : children}
    </>
  );

  return [Content, toggler, loading];
}

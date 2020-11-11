import React, { useMemo, useState } from 'react';

export default function useMask(Mask, initialState = true) {
  const [loading, toggleLoading] = useState(initialState);

  const toggler = (targetState) => (
    targetState 
      ? toggleLoading(targetState)
      : toggleLoading((prevState) => !prevState)
  );

  const Content = useMemo(() => ({ children }) => (
    <>
      {loading ? <Mask /> : children}
    </>
  ), [loading]) ;

  return [Content, toggler, loading]; 
}
import React, { useMemo, useState } from 'react';

export default function useToggleContent(initialState = false) {
  const [show, toggleShow] = useState(initialState);

  const toggler = () => {
    toggleShow((prevShow) => !prevShow);
  };

  const Content = useMemo(() => (
    ({ children }) => (
      <>
        {show && children}
      </>
    )
  ), [show]); 

  return [Content, toggler];
}

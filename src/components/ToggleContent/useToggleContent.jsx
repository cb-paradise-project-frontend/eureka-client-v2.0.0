import React, { useState } from 'react';

export default function useToggleContent(initialState = false) {
  const [show, toggleShow] = useState(initialState);

  const toggler = () => {
    toggleShow((prevShow) => !prevShow);
  };

  const Content = ({ children }) => (
    <>
      {show && children}
    </>
  );

  return [Content, toggler];
}

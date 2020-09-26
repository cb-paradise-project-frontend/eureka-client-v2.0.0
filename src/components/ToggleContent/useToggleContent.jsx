import React, { useState } from 'react';

export default function useToggleContent() {
  const [show, toggleShow] = useState(false);

  const toggler = () => {
    toggleShow((prevShow) => !prevShow);
  };

  const Content = ({ children }) => (
    <>
      {show && children}
    </>
  );
  return [toggler, Content];
}

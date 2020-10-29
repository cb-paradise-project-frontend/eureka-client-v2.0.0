import React, { useState } from 'react';

export default function ScrollManager({ children }) {
  const [lastScroll, saveScroll] = useState();

  return (
    <>
      {children({ lastScroll, saveScroll })}
    </>
  );
}

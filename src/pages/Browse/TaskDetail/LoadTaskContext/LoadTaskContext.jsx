import React, { createContext } from 'react';

export const LoadTaskContext = createContext(null);

export function LoadTaskProvider({ reload, children }) {
  return (
    <LoadTaskContext.Provider value={reload}>
      {children}
    </LoadTaskContext.Provider>
  );
}

export const LoadTaskConsumer = LoadTaskContext.Consumer;

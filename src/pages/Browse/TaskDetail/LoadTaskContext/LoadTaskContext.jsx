import React, { createContext } from 'react';

export const LoadTaskContext = createContext(null);

export function LoadTaskProvider({ loadTaskList, children }) {
  return (
    <LoadTaskContext.Provider value={loadTaskList}>
      {children}
    </LoadTaskContext.Provider>
  );
}

export const LoadTaskConsumer = LoadTaskContext.Consumer;

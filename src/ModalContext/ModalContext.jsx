import React, {createContext} from 'react';

const ModalContext = createContext('');


export function ModalControlProvider({value, children}) {
  return(
    <ModalContext.Provider value = {value}>
      {children}
    </ModalContext.Provider>
  );
}

export const ModalControlConsumer = ModalContext.Consumer;
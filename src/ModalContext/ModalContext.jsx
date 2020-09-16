import React, { useState, createContext } from 'react';

import styles from './Modal.module.scss';

import Overlay from '../components/Overlay';

const ModalContext = createContext();

export function ModalControlProvider({ children }) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalContent, setModal] = useState();

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setModal('');
  };

  const modalControl = { 
    openModal,
    closeModal,
    setModal, 
  };

  return(
    <ModalContext.Provider value={modalControl}>
      {children}
      {modalIsOpen &&
        <Overlay>
          <div className={styles.modal_container} >
            {modalContent}
          </div>     
        </Overlay>
      }
    </ModalContext.Provider>
  );
};

export const ModalControlConsumer = ModalContext.Consumer;
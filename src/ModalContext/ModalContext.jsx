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
  };

  const modalControl = { 
    openModal,
    closeModal,
    setModal, 
  };

  const closeButtonIcon = String.fromCharCode(9747);

  return(
    <ModalContext.Provider value={modalControl}>
      {children}
      {modalIsOpen &&
        <Overlay>
          <div className={styles.modal_container} >
            {/* <button 
              className={styles.close_button}
              onClick={closeModal} 
            >
              {closeButtonIcon}
            </button> */}
            {modalContent}
          </div>     
        </Overlay>
      }
    </ModalContext.Provider>
  );
}

export const ModalControlConsumer = ModalContext.Consumer;
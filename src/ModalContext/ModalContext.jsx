import React, { useState, createContext } from 'react';
import Modal from 'react-modal';
import styles from './Modal.module.scss';

Modal.setAppElement('#root');

const customStyles = {
  content : {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    borderRadius: '10px',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

const ModalContext = createContext();

export function ModalControlProvider({ children }) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalContent, setModal] = useState();

  const openModal = () => {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  const modalControl = { 
    openModal,
    closeModal,
    setModal, 
  };

  const closeButtonIcon = String.fromCharCode(9747);

  return(
    <ModalContext.Provider value={modalControl}>
      {children}
      <Modal 
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <>
          <button 
            className={styles.close_button}
            onClick={closeModal} 
          >
            {closeButtonIcon}
          </button>
          {modalContent}
        </>
      </Modal>
    </ModalContext.Provider>
  );
}

export const ModalControlConsumer = ModalContext.Consumer;
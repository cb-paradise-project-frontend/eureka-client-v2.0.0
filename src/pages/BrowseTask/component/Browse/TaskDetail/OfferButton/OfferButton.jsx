import React from 'react';

import Button from '../../../../../../components/Button';
import { ModalControlConsumer } from '../../../../../../ModalContext';
import CreateProfile from '../../../CreateProfile';

export default function OfferButton({ expired }) {
  const label = expired ? 'Expired' : 'Make an offer';

  const handleClick = ({ openModal, closeModal }, setter) => {
    const setModal = () => {
      setter(<CreateProfile toggler={closeModal} />);
      openModal();
    };
    return setModal;
  };

  return (
    <ModalControlConsumer>
      {({ setModal, ...modalToggler }) => (
        <Button 
          expired={expired}
          handleSubmit={handleClick(modalToggler, setModal)} 
        >
          {label}
        </Button>
      )}
    </ModalControlConsumer>
  );
}


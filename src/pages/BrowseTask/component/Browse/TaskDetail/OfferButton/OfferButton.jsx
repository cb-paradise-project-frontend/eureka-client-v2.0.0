import React from 'react';

import Button from '../../../../../../components/Button';
import { ModalControlConsumer } from '../../../../../../ModalContext';
import CreateProfile from '../../../CreateProfile';

export default function OfferButton({ isExpired }) {
  const label = isExpired ? 'Expired' : 'Make an offer';

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
          isDisabled={isExpired}
          handleSubmit={handleClick(modalToggler, setModal)} 
        >
          {label}
        </Button>
      )}
    </ModalControlConsumer>
  );
}


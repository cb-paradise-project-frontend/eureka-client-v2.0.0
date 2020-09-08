import React from 'react';

import Button from '../../../../../../components/Button';
import { ModalControlConsumer } from '../../../../../../ModalContext';
import CreateProfile from '../../../CreateProfile';

export default function OfferButton({ expired }) {

  const label = expired ? 'Expired' : 'Make an offer';

  const handleClick = (toggler, setter) => {
    const setModal = () => {
      setter(<CreateProfile />);
      toggler();
    };
    return setModal;
  };

  return (
    <ModalControlConsumer>
      {
        ({toggleModal, setModal}) => {
          return (
            <Button 
              expired={expired}
              handleSubmit={handleClick(toggleModal, setModal)} 
            >
              {label}
            </Button>
          );
        }
      }
    </ModalControlConsumer>
  );
}


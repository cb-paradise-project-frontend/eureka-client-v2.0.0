import React, { useContext } from 'react';

import Button from '../../../../components/Button';

import { AuthContext } from '../../../../auth/Auth';
import { useToggleContent } from '../../../../components/ToggleContent';
import CreateProfile from '../../../CreateProfile';
import SignupModal from '../../../../components/SignupModal/SignupModal';

export default function OfferButton({ isExpired }) {
  const [Content, toggler] = useToggleContent();

  const { currentUser } = useContext(AuthContext);

  const label = isExpired ? 'Expired' : 'Make an offer';

  const modalContent = currentUser
    ? (<CreateProfile pageToggler={toggler} />)
    : (<SignupModal pageToggler={toggler} />);

  return (
    <>
      <Button
        onClick={toggler}
        isDisabled={isExpired}
      >
        {label}
      </Button>
      <Content>
        {modalContent}
      </Content>
    </>
  );
}

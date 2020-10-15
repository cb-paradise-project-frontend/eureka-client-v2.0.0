import React, { useContext, useState } from 'react';

import Button from '../../../../components/Button';

import { AuthContext } from '../../../../auth/Auth';
import { useToggleContent } from '../../../../components/ToggleContent';
import CreateProfile from '../../../CreateProfile';
import SignupModal from '../../../../components/SignupModal';
import { getProfile } from '../../../../apis';

export default function OfferButton({ isExpired }) {
  const [Content, toggler] = useToggleContent();
  const [modalContent, setModalContent] = useState();

  const { currentUser } = useContext(AuthContext);

  const label = isExpired ? 'Expired' : 'Make an offer';

  const handleClick = async () => {
    if (!currentUser) {
      await setModalContent(<SignupModal pageToggler={toggler} />);
    } else {
      const profile = await getProfile('5f7e8665b7edfa557c89dbdf');

      const display = profile
        ? 'success'
        : <CreateProfile pageToggler={toggler} />;

      await setModalContent(display);
    }
    toggler();
  };

  return (
    <>
      <Button
        onClick={handleClick}
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

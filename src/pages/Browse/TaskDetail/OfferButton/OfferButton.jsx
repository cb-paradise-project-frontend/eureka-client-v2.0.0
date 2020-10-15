import React, { useContext, useEffect, useState } from 'react';

import Button from '../../../../components/Button';

import { AuthContext } from '../../../../auth/Auth';
import { useToggleContent } from '../../../../components/ToggleContent';
import CreateProfile from '../../../CreateProfile';
import SignupModal from '../../../../components/SignupModal';
import { getProfile } from '../../../../apis';
import MessageBox from '../../../../components/MessageBox';

const successMessage = 'Thanks for your offer! Application have already been sent to the task owner.';

export default function OfferButton({ isExpired }) {
  const [Content, toggler] = useToggleContent();
  const [profileFilled, setProfileFilled] = useState(false);

  const { currentUser } = useContext(AuthContext);

  const label = isExpired ? 'Expired' : 'Make an offer';

  const checkProfile = async () => {
    const profile = await getProfile(currentUser);
    if (profile) setProfileFilled(true);
  };

  useEffect(() => {
    checkProfile();
  }, []);

  const modal = (!currentUser && <SignupModal pageToggler={toggler} />)
    || (!profileFilled && <CreateProfile pageToggler={toggler} />)
    || (
      <MessageBox
        info={successMessage}
        onRequestClose={toggler}
      />
    );

  return (
    <>
      <Button
        onClick={toggler}
        isDisabled={isExpired}
      >
        {label}
      </Button>
      <Content>
        {modal}
      </Content>
    </>
  );
}

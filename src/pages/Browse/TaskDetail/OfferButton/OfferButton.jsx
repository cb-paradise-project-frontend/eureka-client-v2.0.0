import React, { useContext } from 'react';

import Button from '../../../../components/Button';

import { AuthContext } from '../../../../auth/Auth';
import { useToggleContent } from '../../../../components/ToggleContent';
import CreateProfile from '../../../CreateProfile';
import SignupModal from '../../../../components/SignupModal';
import { TaskContext } from '../../TaskContext';
import { EXPIRED } from '../../../../components/Status';

export default function OfferButton() {
  const [Content, toggler] = useToggleContent();

  const { currentUser } = useContext(AuthContext);

  const { status, offers } = useContext(TaskContext);

  const isExpired = (status === EXPIRED);
  const isOffered = offers.length &&
    offers.find(({ offeredBy: { _id } }) => _id === currentUser);

  const label = (isExpired && 'Expired')
    || (isOffered && 'Offered')
    || 'Make an offer';

  const modal = currentUser
    ? <CreateProfile pageToggler={toggler} />
    : <SignupModal pageToggler={toggler} />;

  return (
    <>
      <Button
        onClick={toggler}
        isDisabled={isExpired || isOffered}
      >
        {label}
      </Button>
      <Content>
        {modal}
      </Content>
    </>
  );
}

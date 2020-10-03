import React from 'react';
import { useToggleContent } from '../../../components/ToggleContent';

import AlertModal from './AlertModal';

export default function withAlert(ModalPage) {
  const ModalWithAlert = ({ pageToggler }) => {
    const [AlertContent, toggleAlert] = useToggleContent();

    return (
      <>
        <ModalPage onRequestClose={toggleAlert} />
        <AlertContent>
          <AlertModal
            onRequestClose={toggleAlert}
            onLeftBtnClick={toggleAlert}
            onRightBtnClick={pageToggler}
          />
        </AlertContent>
      </>
    );
  };

  return ModalWithAlert;
}

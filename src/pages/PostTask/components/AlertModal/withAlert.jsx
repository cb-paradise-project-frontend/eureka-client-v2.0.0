import React from 'react';

import useToggleContent from '../../../../hooks/useToggleContent';
import AlertModal from './AlertModal';

export default function withAlert(Component) {
  const ModalWithAlert = ({ pageToggler, ...otherProps }) => {
    const [AlertContent, toggleAlert] = useToggleContent();

    return (
      <>
        <Component
          onRequestClose={toggleAlert}
          onClose={pageToggler}
          {...otherProps}
        />
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

import React, { useState } from 'react';
import MessageBox from '..';

export default function useMessageBox() {
  const [message, showMessage] = useState();

  const MessageContent = ({ onRequestClose }) => {
    const handleRequestClose = () => {
      if (onRequestClose) onRequestClose();
      showMessage('');
    };

    return message ? (
      <MessageBox
        info={message}
        onRequestClose={handleRequestClose}
      />
    ) : null;
  };

  return [MessageContent, showMessage];
}

import React, { useState } from 'react';
import MessageBox from '..';

export default function useMessageBox() {
  const [message, showMessage] = useState();

  const MessageContent = () => {
    return message ? (
      <MessageBox
        info={message}
        onRequestClose={() => showMessage('')}
      />
    ) : null;
  };

  return [MessageContent, showMessage];
}

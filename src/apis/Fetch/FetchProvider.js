import React, { useState, useEffect } from 'react';
import Notification from '../../components/Notification/Notification';
import FetchContext from './FetchContext';

const FetchProvider = ({children}) => {
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState({
    status: null,
    message: null,
  });

  return (
    <FetchContext.Provider
      value={{
        loading,
        setLoading,
        notification,
        setNotification,
      }}
    >
      {notification.message &&
        <Notification
          status={notification.status}
          notificationMessage={notification.message}
        />}
      {children}
    </FetchContext.Provider>
  );
}

export default FetchProvider;

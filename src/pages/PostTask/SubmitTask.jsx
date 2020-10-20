import React, { useContext } from 'react';
import postTask from '../../apis/postTask';
import { AuthContext } from '../../auth/Auth';
import LoginModal from '../../components/LoginModal/LoginModal';

export default function SubmitTask({data}) {

  const { currentUser } = useContext(AuthContext);

  const modal = currentUser ? postTask(data) : <LoginModal />;


  return (
    {modal}
  )
}
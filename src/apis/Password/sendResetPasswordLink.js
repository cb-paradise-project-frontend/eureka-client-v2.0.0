import { apiWithoutAuth } from '..';

const sendResetPasswordLink = async (email) => {
  const response = await apiWithoutAuth.post('/users/forgot-password', email);

  return (response.status === 200) && response.data;
};

export default sendResetPasswordLink;

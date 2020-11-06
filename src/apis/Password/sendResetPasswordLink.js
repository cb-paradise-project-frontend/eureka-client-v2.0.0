import { apiWithoutAuth } from '..';

const sendResetPasswordLink = async (email) => {
  try {
    const response = await apiWithoutAuth.post('/users/forgot-password', email);
    return (response.status === 200) && response.data;
  } catch(err) {
    return err.response;
  }
};

export default sendResetPasswordLink;

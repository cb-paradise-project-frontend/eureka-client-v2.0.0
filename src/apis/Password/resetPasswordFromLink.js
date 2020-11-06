import { apiWithoutAuth } from '..';

const resetPasswordFromLink = async (data) => {
  try {
    const response = await apiWithoutAuth.put('/users/reset-password', data);
    return (response.status === 200) && response.data;
  } catch(err) {
    return err.response;
  }
  
};

export default resetPasswordFromLink;

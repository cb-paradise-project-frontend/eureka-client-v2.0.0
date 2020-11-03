import { apiWithoutAuth } from '..';

const resetPasswordFromLink = async (data) => {
  const response = await apiWithoutAuth.put('/users/reset-password', data);

  return (response.status === 200) && response.data;
};

export default resetPasswordFromLink;

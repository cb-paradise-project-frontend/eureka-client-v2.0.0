import { api } from '../axiosInstance';

const resetPassword = async (passwords) => {
  const response = await api.put('/users/password', passwords);

  return (response.status === 202) && response.data;
};

export default resetPassword;

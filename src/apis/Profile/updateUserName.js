import { api } from '../axiosInstance';

const updateUserName = async (username) => {
  const response = await api.put('/users/name', username);

  return (response.status === 202) && response.data;
};

export default updateUserName;

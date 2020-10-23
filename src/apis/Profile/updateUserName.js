import { api } from '../axiosInstance';
import { destructure } from '../utils';

const updateUserName = async (username) => {
  const response = await api.put('/users/name', username);

  return (response.status === 202) && response.data;
};

export default updateUserName;

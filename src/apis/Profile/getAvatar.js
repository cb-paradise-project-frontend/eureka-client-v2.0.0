import { api } from '../axiosInstance';

const getAvatar = async () => {
  const response = await api.get('/profiles/avatar');

  return (response.status === 200) && response.data;
};

export default getAvatar;

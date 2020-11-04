import { api } from '../axiosInstance';

const updateAvatar = async (avatarID) => {
  const response = await api.put('/users/avatar', avatarID);

  return (response.status === 200) && response.data;
};

export default updateAvatar;

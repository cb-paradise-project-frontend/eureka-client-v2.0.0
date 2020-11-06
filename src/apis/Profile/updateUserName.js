import { api } from '../axiosInstance';

const updateUserName = async (username) => {
  try {
    const response = await api.put('/users/name', username);
    return (response.status === 202) && response.data;
  } catch(err) {
    return err.response;
  }
};

export default updateUserName;

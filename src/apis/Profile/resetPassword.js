import { api } from '../axiosInstance';

const resetPassword = async (passwords) => {
  try {
    const response = await api.put('/users/password', passwords);
    // console.log(9999, response);
    return (response.status === 202) && response.data;
  } catch(err) {
    // console.error(99, err.response);
    return err.response;
  }
};

export default resetPassword;

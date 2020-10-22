import { api } from './../axiosInstance';
import { removeLocalToken } from './../utils';

const checkUser = async () => {
  try {
    await api.get('/auth');
  } catch (error) {
    console.log(error);
    removeLocalToken();
  }
};

export default checkUser;

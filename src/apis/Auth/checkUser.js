import { axiosInstance, connectAuth } from './../axiosInstance';

const checkUser = async () => {
  const connectWithAuth = axiosInstance.post('/users/verify');
  connectAuth(connectWithAuth);
};

export default checkUser;

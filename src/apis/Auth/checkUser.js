import { api } from './../axiosInstance';

const checkUser = () => {
  api.get('/auth');
};

export default checkUser;

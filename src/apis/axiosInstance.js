import axios from 'axios';
import { connectAuth } from './utils/axiosInterceptors';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000/api'
});

connectAuth(axiosInstance);

export { axiosInstance as api };

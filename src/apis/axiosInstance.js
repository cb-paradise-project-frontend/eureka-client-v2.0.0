import axios from 'axios';
import { connectAuth } from './utils/axiosInterceptors';

const BACKEND_ADDRESS = 'http://localhost:5000/api';
// const BACKEND_ADDRESS = 'http://ec2-13-211-110-17.ap-southeast-2.compute.amazonaws.com:5000/api';

const axiosInstance = axios.create({
  baseURL: BACKEND_ADDRESS,
});

const baseInstance = axios.create({
  baseURL: BACKEND_ADDRESS,
});

connectAuth(axiosInstance);

export { axiosInstance as api, baseInstance as apiWithoutAuth };

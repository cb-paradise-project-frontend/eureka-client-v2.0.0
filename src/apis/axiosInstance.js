import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000/api'
});

const setTokenToRequest = (config) => {
  const token = localStorage.getItem('token');

  if (token) {
    config.headers = {
      ...config.headers,
      'X-Auth-Token': token,
    };
  }

  return config;
}

const extractTokenFromResponse = (response) => {
  const token = response.headers['x-auth-token'];

  if (token) {
    localStorage.setItem('token', token);
  }

  return response;
}

const connectAuth = () => {
  axiosInstance.interceptors.request.use(setTokenToRequest);
  axiosInstance.interceptors.response.use(extractTokenFromResponse);
}

export { axiosInstance, connectAuth, setTokenToRequest, extractTokenFromResponse };

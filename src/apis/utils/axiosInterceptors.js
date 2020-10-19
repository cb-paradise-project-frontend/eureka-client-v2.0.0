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

const connectAuth = (axiosInstance) => {
  axiosInstance.interceptors.request.use(setTokenToRequest);
  axiosInstance.interceptors.response.use(extractTokenFromResponse);
}

export { connectAuth, setTokenToRequest, extractTokenFromResponse };
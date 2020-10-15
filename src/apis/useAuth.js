const extractTokenFromResponse = (response) => {
  const token = response.headers['x-auth-token'];

  if (token) {
    localStorage.setItem('token', token);
  }

  return response;
}

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

const useAuth = (instance) => {
  instance.interceptors.response.use(extractTokenFromResponse);
  instance.interceptors.request.use(setTokenToRequest);
}

export default useAuth;
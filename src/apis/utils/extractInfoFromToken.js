import jwt_decode from 'jwt-decode';

const extractInfoFromToken = () => {
  const token = window.localStorage.getItem('token');
  if (!token) return;
  const decoded = jwt_decode(token);
  return decoded;
};

export default extractInfoFromToken;
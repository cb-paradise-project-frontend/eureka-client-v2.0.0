import { api } from '../axiosInstance';
import { destructure } from '../utils';

export default async function getProfile() {
  const response = await api.get('/profiles');
  const data = destructure(response);

  return data.length && data[0];
}

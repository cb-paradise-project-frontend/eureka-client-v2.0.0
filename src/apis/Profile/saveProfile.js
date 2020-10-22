import { api } from '../axiosInstance';
import { destructure } from '../utils';

export default async function saveProfile(profile) {
  const response = await api.put('/profiles', profile);

  return (response.status === 200) && destructure(response);
}

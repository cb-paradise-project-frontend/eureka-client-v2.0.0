import { api } from '../axiosInstance';
import { destructure } from '../utils';

export default async function saveProfile(profile) {
  try {
    const response = await api.put('/profiles', profile);
    return (response.status === 200) && destructure(response);
  } catch(err) {
    console.error('saveProfile报错', err)
    return err.response;
  }
}

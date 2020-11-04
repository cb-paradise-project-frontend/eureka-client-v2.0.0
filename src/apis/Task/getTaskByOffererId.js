import { api } from '../axiosInstance';
import { destructure } from '../utils';

export default async function getTaskByOffererId() {
  let response;

  try {
    response = await api.get('/tasks/offerer');
  } catch(error) {
    console.log('error: ', error.message);

    return false;
  }

  return (response.status === 200) && destructure(response);
}

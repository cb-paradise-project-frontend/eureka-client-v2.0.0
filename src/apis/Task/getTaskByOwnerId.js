import { api } from '../axiosInstance';
import { destructure } from '../utils';

export default async function getTaskByOwnerId() {
  let response;

  try {
    response = await api.get('/tasks/owner');
  } catch(error) {
    console.log('error: ', error.message);

    return false;
  }

  return (response.status === 200) && destructure(response);
}

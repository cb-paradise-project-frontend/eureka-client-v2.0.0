import { api } from '../axiosInstance';
import { destructure } from '../utils';

export default async function getTaskByUserId() {
  let response;

  try {
    response = await api.get('/tasks/private');
  } catch(error) {
    console.log('error: ', error.message);

    return false;
  }

  console.log(response);

  return (response.status === 200) && destructure(response);
}

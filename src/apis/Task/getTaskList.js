import { api } from '../axiosInstance';
import { destructure } from '../utils';

export default async function getTaskList(filter) {
  const filterKeyArray = filter && Object.keys(filter);

  const filteredConfig = filterKeyArray && filterKeyArray
    .filter((key) => filter[key]);

  const urlConfig = !filteredConfig
    ? '/tasks'
    : filteredConfig
      .reduce((url, key, index) => (
        index === filteredConfig.length - 1
          ? `${url}${key}=${filter[key]}`
          : `${url}${key}=${filter[key]}&`
      ), '/tasks?');

  let response;

  try {
    response = await api.get(`${urlConfig}`);
  } catch(error) {
    console.log('error: ', error.message);

    return false;
  }

  return (response.status === 200) && destructure(response);
}

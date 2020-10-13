import taskData from './axiosInstance';

export default function getTaskList(filter) {
  const filterKeyArray = filter && Object.keys(filter);

  const filteredConfig = filterKeyArray && filterKeyArray
    .filter((key) => filter[key]);

  if (!filteredConfig) return taskData.get();

  const urlConfig = filteredConfig.reduce((url, key, index) => (
    index === filteredConfig.length - 1
      ? `${url}${key}=${filter[key]}`
      : `${url}${key}=${filter[key]}&`
  ), '?');

  // const config = stringConfig
  //   .slice(0, stringConfig.length - 1);

  return taskData.get(urlConfig);
}

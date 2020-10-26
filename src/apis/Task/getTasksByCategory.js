const { api } = require("../axiosInstance");
const { destructure } = require("../utils");

export default async function getTasksByCategory(category) {
  let response;

  try {
    response = await api.get(`/tasks/category/${category}`)
  } catch(error) {
    console.log('error: ', error.message);

    return false;
  }

  console.log(destructure(response));
  return (response.status === 200) && destructure(response);
}
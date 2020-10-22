import { api } from '../axiosInstance';

export default async function makeOffer(taskId) {
  const { status } = await api
    .put(`/tasks/offer/${taskId}`);

  return status === 200 || false;
}

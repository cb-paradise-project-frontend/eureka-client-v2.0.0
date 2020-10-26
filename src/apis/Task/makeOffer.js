import { api } from '../axiosInstance';

export default async function makeOffer(taskId, message) {
  const { status } = await api
    .put(`/tasks/offer/${taskId}`, { message });

  return status === 200 || false;
}

import { api } from '../axiosInstance';

export default async function makeOffer(userId, taskId) {
  const { status } = await api
    .put(`/tasks/offer/${taskId}`, { userId });

  return status === 200 || false;
}

import { api } from '../axiosInstance';

export default async function makeOffer(taskId, offer) {
  const { status } = await api
    .put(`/tasks/offer/${taskId}`, offer);

  return status === 200 || false;
}

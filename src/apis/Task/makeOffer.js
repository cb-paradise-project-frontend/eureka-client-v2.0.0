import { axiosInstance } from '../axiosInstance';

export default async function makeOffer(userId, taskId) {
  const { status } = await axiosInstance
    .put(`/tasks/offer/${taskId}`, { userId });

  return status === 200 || false;
}

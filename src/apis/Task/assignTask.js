import { api } from '../axiosInstance';

export default async function assignTask(taskId, assignUserId) {
  const { status } = await api
    .put(`/tasks/assign/${taskId}`, { assignUserId });

  return status === 200 || false;
}//TODO: untested

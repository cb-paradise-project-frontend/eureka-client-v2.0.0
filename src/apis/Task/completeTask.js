import { api } from '../axiosInstance';

export default async function completeTask(taskId) {

  const { status } = await api.put(`/tasks/complete/${taskId}`);

  return (status === 200 || false);
}

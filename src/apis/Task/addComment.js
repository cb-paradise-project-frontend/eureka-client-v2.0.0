import { api } from '../axiosInstance';

export default async function addComment(taskId, message) {
  const comment = { message };

  const { status } = await api.put(`/tasks/comment/${taskId}`, comment);

  return (status === 200);
}

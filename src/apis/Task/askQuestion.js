import { api } from '../axiosInstance';

export default async function askQuestion(userId, taskId, question) {
  const comment = {
    askedBy: userId,
    message: question,
  };

  const { status } = await api.put(`/tasks/comment/${taskId}`, comment);

  return (status === 200);
}

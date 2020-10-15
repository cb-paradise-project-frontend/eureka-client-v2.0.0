import axiosInstance from '../axiosInstance';

export default async function askQuestion(userId, taskId, question) {
  const comment = {
    askedBy: userId,
    message: question,
  };

  const updatesTask = await axiosInstance.put(`/tasks/comment/${taskId}`, comment);

  return updatesTask;
}
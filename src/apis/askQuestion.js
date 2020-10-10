import taskData from './axiosInstance';

export default async function askQuestion(userId, taskId, question) {
  const comment = {
    askedBy: userId,
    message: question,
  };

  const updatesTask = await taskData.put(`/comment/${taskId}`, comment);

  return updatesTask;
}
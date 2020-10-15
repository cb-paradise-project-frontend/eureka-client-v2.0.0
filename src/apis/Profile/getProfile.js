import axiosInstance from '../axiosInstance';
import destructure from '../utils/destructure';

export default async function getProfile(userId) {
  const response = await axiosInstance.get(`/profiles/${userId}`);
  const data = destructure(response);

  return data.length && data[0];
}

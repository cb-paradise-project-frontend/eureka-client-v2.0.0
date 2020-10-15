import axiosInstance from './axiosInstance';

export default async function getProfile(userId) {
  const { data: { data } } = await axiosInstance.get(`/profiles/${userId}`);

  return data && data.length && data;
}

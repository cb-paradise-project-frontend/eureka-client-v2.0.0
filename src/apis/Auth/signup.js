import { api } from '../axiosInstance';

export default async function signup(formData) {
  try {
    const res = await api.post('/users', formData);
    return res;
  } catch (error) {
    throw error;
  }
}
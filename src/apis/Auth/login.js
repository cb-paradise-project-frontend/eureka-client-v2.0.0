import { api } from '../axiosInstance';

export default async function login(formData) {
  try {
    const res = await api.post('/users/login', formData);
    return res;
  } catch (error) {
    throw error;
  }
}
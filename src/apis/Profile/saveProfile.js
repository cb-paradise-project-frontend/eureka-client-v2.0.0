import { api } from '../axiosInstance';
import { destructure } from '../utils';

export default async function saveProfile(profile) {
  const { birthday: {
      day,
      month,
      year,
    },
  } = profile;

  const formatData = {
    ...profile,
    birthday: new Date(year, month - 1, day),
  };

  const response = await api.put('/profiles', formatData);

  return (response.status === 200) && destructure(response);
}

import { api } from '../axiosInstance';
import { destructure } from '../utils';

export default async function saveProfile(profile) {
  const {
    bankAccount: {
      holder,
      accountNumber,
      bsb,
    },
    billingAddress: {
      lineOne,
      lineTwo,
      suburb,
      state,
      postcode,
      country,
    },
    birthday: {
      day,
      month,
      year,
    },
    mobile,
  } = profile;

  const formatData = {
    accountHolder: holder,
    accountNumber,
    bsb,
    billingAddress: {
      lineOne,
      lineTwo,
      suburb,
      state,
      postcode,
      country,
    },
    birthday: new Date(year, month - 1, day),
    mobile,
  };

  const response = await api.put('/profiles', formatData);

  return (response.status === 200) && destructure(response);
}

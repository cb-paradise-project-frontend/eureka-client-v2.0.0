import axiosInstance from '../axiosInstance';

export default async function saveProfile(userId, profile) {
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
    user: userId,
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

  const { status } = await axiosInstance.put('/profiles', formatData);

  return status === 200 || false;
}
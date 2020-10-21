const converNumber1To01 = (number) => (
  number < 10 && `0${number}`
);

const setInitalizeBirthday = (birthday) => {
  if (!birthday) {
    return {
      day: '',
      month: '',
      year: '',
    };
  }

  const birthdayTimeStamp = new Date(birthday);

  return {
    day: converNumber1To01(birthdayTimeStamp.getDate()),
    month: converNumber1To01(birthdayTimeStamp.getMonth() + 1),
    year: birthdayTimeStamp.getFullYear(),
  };
};

export default setInitalizeBirthday;

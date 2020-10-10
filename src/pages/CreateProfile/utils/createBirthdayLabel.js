export default function createBirthdayLabel(birthday) {
  if (!birthday) return null;
  const { day, month, year } = birthday;
  const birthdayObj = new Date(year, month - 1, day);
  const formattedBirthday = birthdayObj.toDateString().replace(/[^\s]+/, '');
  return formattedBirthday;
}

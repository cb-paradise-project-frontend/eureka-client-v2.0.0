export default function toDate(birthdayObj) {
  const { day, month, year } = birthdayObj;
  return new Date(year, month - 1, day);
}

export default function createBirthdayLabel(birthday) {
  if (!birthday) return null;

  const date = new Date(birthday);

  const formattedBirthday = date
    .toDateString()
    .replace(/[^\s]+/, '');

  return formattedBirthday;
}

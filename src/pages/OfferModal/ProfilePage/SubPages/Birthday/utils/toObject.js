export default function toObject(birthDate) {
  const date = new Date(birthDate);
  return {
    day: date.getDate(),
    month: date.getMonth() + 1,
    year: date.getFullYear(),
  };
}

export default function isAdult(day, month, year) {
  const age = Math.floor((new Date() - new Date(year, month-1, day).getTime()) / 3.15576e+10);
  return (age >= 18);
};
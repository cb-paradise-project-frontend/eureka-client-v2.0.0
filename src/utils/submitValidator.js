export function isBirthday({ day, month, year }) {
  const MAX_DAY = [
    31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31,
  ];

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  const conditions = [ 
    // year valid
    ( year > currentYear - 150 && year < currentYear),
    // month valid
    (0 < month < 13),
    // day valid
    (0 < day < MAX_DAY[day - 1]),
  ];

  const reducer = (accumulator, currentValue) => accumulator && currentValue;

  return conditions.reduce(reducer);
}
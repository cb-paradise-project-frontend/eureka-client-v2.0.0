export default function isDate(day, month, year, validYearRange=150) {
  if(!day || !month || !year) return false;
  const MAX_DAY = [
    31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31,
  ];
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  const conditions = [ 
    // year valid
    ( year > currentYear - validYearRange),
    // month valid
    (month > 0 && month < 13),
    // day valid
    (day > 0 && day < (MAX_DAY[month-1] + 1) ),
  ];

  const reducer = (accumulator, currentValue) => accumulator && currentValue;
  return conditions.reduce(reducer);
};
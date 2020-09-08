export default function dayLabel(dayNumber) {
  return dayNumber + {
    1: 'st',
    2: 'nd',
    3: 'rd',
  }[dayNumber] || 'th';
};